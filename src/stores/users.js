import { defineStore } from 'pinia'

// Storage for working with all users
export const useUsersStore = defineStore('users', {
  state: () => {
    return { userList: [] }
  },
  actions: {
    // A method for registering a new user;
    // it checks whether such a user exists in the system and, based on the check, either returns an error or adds the user.
    registerUser(userData) {
      if (this.userList.find((user) => user.login === userData.login)) {
        throw new Error('Такой пользователь уже существует')
      }
      this.userList.push(userData)
    },
    // Method for verifying user login data
    findUser(userData) {
      const user = this.userList.find(
        (user) => user.login === userData.login && user.password === userData.password,
      )
      if (!user) {
        throw new Error('Неверный логин или пароль')
      }
      return user
    },
    // Search for a user by login
    findUserByLogin(login) {
      return this.userList.find((u) => u.login === login)
    },
    // Search for multiple users at once by their logins
    getUsersByLogin(logins) {
      return logins.map((login) => this.findUserByLogin(login)).filter((user) => user)
    },
  },
  persist: true,
})
