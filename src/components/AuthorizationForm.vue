<template>
  <ContainerWrapper>
    <form>
      <FormWrapper>
        <div>
          <CustomInput v-model="userLogin" name="login" label="Логин"></CustomInput>
          <CustomInput
            v-model="password"
            name="password"
            label="Пароль"
            type="password"
          ></CustomInput>
        </div>
        <RouterLink to="/reg" class="link">Нет аккаунта?</RouterLink>
        <div>
          <CustomButton @click="handleLogin">Войти</CustomButton>
        </div>
      </FormWrapper>
    </form>
  </ContainerWrapper>
</template>

<script setup>
import FormWrapper from './FormWrapper.vue'
import CustomInput from './CustomInput.vue'
import CustomButton from './CustomButton.vue'
import ContainerWrapper from './ContainerWrapper.vue'
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import { useCurrentUserStore } from '@/stores/user'

const userLogin = ref('')
const password = ref('')
const error = ref('')
const usersStore = useUsersStore()
const currentUser = useCurrentUserStore()

const handleLogin = () => {
  error.value = ''

  try {
    const user = usersStore.findUser({ login: userLogin.value, password: password.value })
    if (user) {
      currentUser.login(user)
    }
  } catch (err) {
    error.value = err.message
    console.log(error.value)
  }
}
console.log(usersStore)
</script>

<style scoped></style>
