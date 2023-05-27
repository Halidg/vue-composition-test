import { defineStore } from 'pinia'

export const useScoreStore = defineStore('scoreStore', {
  state: () => ({
    scores:  [
      '> 20',
      '< 10'
    ],
  }),
})