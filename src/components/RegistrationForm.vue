<template>
  <ContainerWrapper>
    <form name="reg_form">
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
      <div class="test">
        <div v-if="success" class="success notification">Вы зарегистрировались</div>
        <div v-if="error" class="error notification">{{ error }}</div>
      </div>
    </form>
  </ContainerWrapper>
</template>

<script setup>
import FormWrapper from './FormWrapper.vue'
import CustomInput from './CustomInput.vue'
import CustomButton from './CustomButton.vue'
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import ContainerWrapper from './ContainerWrapper.vue'

const name = ref('')
const login = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref(false)
const userStore = useUsersStore()

const resetForm = () => {
  name.value = ''
  login.value = ''
  email.value = ''
  password.value = ''
}

const handleRegister = () => {
  success.value = false
  error.value = ''
  try {
    userStore.registerUser({
      name: name.value,
      login: login.value,
      email: email.value,
      password: password.value,
    })
    success.value = true
    resetForm()
  } catch (err) {
    error.value = err.message
    console.log(error.value)
  }
}
</script>

<style scoped>
.notification {
  margin-top: 10px;
  text-align: center;
  font-weight: 700;
}

.success {
  color: #02b914;
}
.error {
  color: #ec1010;
}
</style>
<!-- A registration form containing data entry components, each of which has its own data.
When clicked, the button component registers, calls a method, and checks the user storage.
If registration is successful, it clears the form.
There is a link to go to the authorization form.
Supporting components in the form of a container and form shell are also used. -->
