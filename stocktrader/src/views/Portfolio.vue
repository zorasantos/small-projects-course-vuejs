<template>
  <v-container>
    <SellStock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-container>
</template>

<script>
const SellStock = () => import('@/components/portfolio/SellStock')
export default {
  name: 'Portfolio',
  components: { SellStock },
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio
    }
  }

}
</script>

<style>

</style>