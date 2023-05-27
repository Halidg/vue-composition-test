<template>
  <v-col cols="12" md="4">
    <v-select
        v-model="selectedCountry"
        :items="countries"
        clearable
        label="Filter by country"
        @update:modelValue="emitCountry"
    ></v-select>
    
    <v-select
        v-model="selectedScore"
        :items="scores"
        clearable
        label="Filter by score"
        @update:modelValue="emitScore"
    ></v-select>
  </v-col>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FilterComponent',
  props: {
    scores: {
      type: Array,
      required: true
    },
    countries: {
      type: Array,
      required: true
    }
  },

  setup(props, { emit }) {
    const selectedCountry = ref(null)
    const selectedScore = ref(null)

    const emitCountry = () => {
      emit('country-selected', selectedCountry.value)
    }
    
    const emitScore = () => {
      emit('score-selected', selectedScore.value)
    }
    
    return { 
      selectedCountry,
      selectedScore, 
      emitCountry, 
      emitScore, 
    }
  }
}
</script>