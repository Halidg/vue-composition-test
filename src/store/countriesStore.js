import { defineStore } from 'pinia'

export const useCountriesStore = defineStore('countriesStore', {
  state: () => ({
    countries:  [
      'russia',
      'usa'
    ],
  }),
})