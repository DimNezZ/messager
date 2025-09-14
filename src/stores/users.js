import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => {
    return { userList: [] }
  },
  actions: {
    registerUser(userData) {
      if (this.userList.find((user) => user.login === userData.login)) {
        throw new Error('Такой пользователь уже существует')
      }
      this.userList.push(userData)
    },
    findUser(userData) {
      const user = this.userList.find(
        (user) => user.login === userData.login && user.password === userData.password,
      )
      if (!user) {
        throw new Error('Неверный логин или пароль')
      }
      return user
    },
    findUserByLogin(login) {
      return this.userList.find((u) => u.login === login)
    },
    getUsersByLogin(logins) {
      return logins.map((login) => this.findUserByLogin(login)).filter((user) => user)
    },
  },
  persist: true,
})
