import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users:  [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('/users.json')
        this.users = response.data

      } catch (error) {
        console.error(error)
      }
    }
  },
})