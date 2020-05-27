<template>
  <v-container>
    <v-card>
      <v-card-title :class="$style.cardTitleStyle" class="headline white--text">
        <strong>{{ stock.name }} <small>Preço: {{ stock.price | currency }}</small></strong>
      </v-card-title>
      <v-container fill-height>
        <v-text-field
          label="Quantidade" type="number"
          v-model.number="quantity"
          :error="insuficientFunds || !Number.isInteger(quantity)"
          v-on:keyup.enter="buyStock"
        />
        <v-btn
          @click="buyStock" :disabled="insuficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          class="green darken-3 white--text"
        >
          {{ insuficientFunds ? 'Insuficiente' : 'Comprar' }}
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Stock',
  props: ['stock'],
  data: () => {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insuficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style module>
  .cardTitleStyle {
    background-color: #3E8742;
  }
</style>