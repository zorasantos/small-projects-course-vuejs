<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
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
    //carrega os dados do firebase ao iniciar a aplicação - autoral
    this.$store.dispatch('loadData')
  }
}
</script>
<style>
  @keyframes slide-in {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0px); opacity: 1; }
  }
  @keyframes slide-out {
    from { transform: translateY(0px); opacity: 1; }
    to { transform: translateY(-30px); opacity: 0; }
  }
  .slide-enter-active {
    animation: slide-in 0.3s ease;
  }
  .slide-leave-active {
    animation: slide-out 0.3s ease;
  }
</style>