<template>
  <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
          <v-list three-line>
            <template v-for="(item, index) in users">
              <v-list-subheader
                v-if="item.header"
                :key="item.header"
              >{{ item.header }}</v-list-subheader>

              <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
              ></v-divider>

              <v-list-item
                  v-else
                  :key="item.title"
                  :prepend-avatar="item.avatar"
                  @click="showAddress(item.id)"
              >
                <v-list-item>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                </v-list-item>

                <v-list-item v-if="currentId === item.id">
                  <v-list-item-subtitle>{{ item.address }}</v-list-item-subtitle>
                </v-list-item>
                
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Users',
  props: {
    users: {
      type: Array,
    },
  },
  setup() {
    const currentId = ref(null)

    const showAddress = (id) => {
      currentId.value = currentId.value === id ? null : id
    }

    return {
      currentId,
      showAddress,
    }
  }
}
</script>

<style >
</style>