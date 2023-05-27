<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
     
      <Filters 
        :countries="countries" 
        :scores="scores"
        @country-selected="handleCountrySelected"
        @score-selected="handleScoreSelected"
      />
      <UserCard  v-if="users.length  && !isLoading" :users="users"></UserCard>
      <v-progress-circular class="ml-10" v-if="isLoading" indeterminate color="primary"></v-progress-circular>
      <span class="ml-10" v-else-if="!users.length">Пользователя с такими параметрами нет</span>
    </v-row>
  </v-container>
</template>

<script>
import Filters from '../components/Ui/Filters.vue'
import UserCard from './Ui/UserCard.vue'

import { computed, ref, onMounted } from 'vue'
import { useUserStore } from '../store/userStore'
import { useScoreStore } from '../store/scoreStore'
import { useCountriesStore } from '../store/countriesStore'
import { useFiltersStore } from '../store/filtersStore'

export default {
  name: 'ContentBlock',
  components: {
    UserCard,
    Filters
  },
  setup() {
    const userStore = useUserStore()
    const scoreStore = useScoreStore()
    const countriesStore = useCountriesStore()
    const filtersStore = useFiltersStore()
    
    const isLoading = ref(false)

    onMounted(async () => {
      await userStore.fetchUsers()
    })

    const handleCountrySelected = (selectedCountry) => {
      isLoading.value = true

      setTimeout(() => {
        filtersStore.setCountryFilter(selectedCountry)
        isLoading.value = false
      }, 500)    
    }

    const handleScoreSelected = (selectedScore) => {
      isLoading.value = true

      setTimeout(() => {
        filtersStore.setScoreFilter(selectedScore)
        isLoading.value = false
      }, 500)
    }

    const users = computed(() => {
      let users = [...userStore.users]

      if (filtersStore.country) {
        users = users.filter(user => user.country === filtersStore.country)
      }

      if (filtersStore.score) {
        users = users.filter(user => {
        if (filtersStore.score === '> 20') {
          return user.score > 20
        } else if (filtersStore.score === '< 10') {
            return user.score < 10
        }
        })
      }
      
      return users
    })

    const countries = computed(() => countriesStore.countries)
    const scores = computed(() => scoreStore.scores)
  
    return {
      users,
      countries,
      scores,
      isLoading,
      handleCountrySelected,
      handleScoreSelected
    }
  }
}
</script>

<style>
</style>