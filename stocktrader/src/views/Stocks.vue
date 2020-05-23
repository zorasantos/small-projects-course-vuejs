<template>
  <v-container>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-container>
</template>

<script>
const Stock = () => import('@/components/stocks/Stock')
export default {
  name: 'Stocks',
  components: { Stock },
  data: () => {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 280 },
        { id: 4, name: 'Twitter', price: 31 }
      ]
    }
  }

}
</script>

<style>

</style>