<template>
  <v-container>
    <v-card>
      <v-card-title :class="$style.cardTitleStyle" class="headline white--text">
        <strong>
          {{ stock.name }}
          <small>Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }}</small>
        </strong>
      </v-card-title>
      <v-container fill-height>
        <v-text-field
          label="Quantidade" type="number"
          v-model.number="quantity"
          :error="insuficientQuantity || !Number.isInteger(quantity)"
        />
        <v-btn
          @click="sellStock" :disabled="insuficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          class="blue darken-3 white--text"
        >
          {{ insuficientQuantity ? 'Insuficiente' : 'Vender' }}
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
    insuficientQuantity () {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style module>
  .cardTitleStyle {
    background-color: blue;
  }
</style>