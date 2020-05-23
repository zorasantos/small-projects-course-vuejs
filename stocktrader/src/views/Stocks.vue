<template>
  <v-container>
    <BuyStock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-container>
</template>

<script>
const BuyStock = () => import('@/components/stocks/BuyStock')
export default {
  name: 'Stocks',
  components: { BuyStock },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>

</style>