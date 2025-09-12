<template>
  <form>
    <FormWrapper>
      <div>
        <CustomInput v-model="name" name="name" label="Имя"></CustomInput>
        <CustomInput v-model="login" name="login" label="Логин"></CustomInput>
        <CustomInput
          v-model="email"
          name="email"
          label="Электронная почта"
          type="email"
        ></CustomInput>
        <CustomInput
          v-model="password"
          name="password"
          label="Пароль"
          type="password"
        ></CustomInput>
      </div>
      <RouterLink to="/auth" class="link">Уже есть аккаунт?</RouterLink>
      <div>
        <CustomButton @click="handleRegister">Зарегестрироваться</CustomButton>
      </div>
    </FormWrapper>
  </form>
</template>

<script setup>
import FormWrapper from './FormWrapper.vue'
import CustomInput from './CustomInput.vue'
import CustomButton from './CustomButton.vue'
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'

const name = ref('')
const login = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref(false)
const userStore = useUsersStore()

const handleRegister = () => {
  success.value = false
  try {
    userStore.registerUser({
      name: name.value,
      login: login.value,
      email: email.value,
      password: password.value,
    })
    // register({ name: name.value, login: login.value, email: email.value, password: password.value })
    success.value = true
  } catch (err) {
    error.value = err.message
    console.log(error.value)
  }
}
</script>

<style scoped></style>
