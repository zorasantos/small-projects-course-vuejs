<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
const Header = () => import('@/components/Header')

export default {
  name: 'App',

  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>
