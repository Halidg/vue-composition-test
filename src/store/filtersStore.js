import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filtersStore', {
  state: () => ({
    country: null,
    score: null,
  }),
  actions: {
    setCountryFilter(country) {
      this.country = country
    },
    setScoreFilter(score) {
      this.score = score
    }
  },
  getters: {
    getCountryFilter() {
      return this.country
    },
    getScoreFilter() {
      return this.score
    },
  },
})