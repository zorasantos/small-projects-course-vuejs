<template>
  <v-container>
    <v-card>
      <v-card-title :class="$style.cardTitleStyle" class="headline white--text">
        <strong>{{ stock.name }} <small>Preço: {{ stock.price }}</small></strong>
      </v-card-title>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn
          @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          class="green darken-3 white--text">Comprar
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
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
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