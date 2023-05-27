<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>
    <v-footer app v-bind="localAttrs">
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from './components/ContentBlock';
import AppFooter from './components/AppFooter';

export default {
  name: 'App',

  components: {
    ContentBlock,
    AppFooter
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },
};
</script>