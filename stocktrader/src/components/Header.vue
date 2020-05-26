<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase mr4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text to="/">Inicio</v-btn>
      <v-btn text to="/portfolio">Portfolio</v-btn>
      <v-btn text to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="endDay" text>Finalizar Dia</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Salvar & Carregar</v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <v-row align="center">
        <span class="text-uppercase grey--text text--darken-2 ml-6 mr-4">
          Saldo: {{ funds | currency }}
        </span>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay () {
      this.randomizeStocks()
    }

  }
}
</script>

<style>

</style>