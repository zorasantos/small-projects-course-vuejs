<template>
  <v-container>
    <h1 class="display-3 font-weight-light mb-3">Negocie e consulte suas ações</h1>
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="font-weight-light white--text">Você pode Salvar & Carregar os Dados</span>
    </v-sheet>

    <v-sheet :elevation="6" class="pa-2 mt-6" color="success darken-1">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="font-weight-light white--text">
        Clique em 'Finalizar Dia' para iniciar um novo dia!
      </span>
    </v-sheet>

    <v-divider class="my-4" />
    <p class="display-1"><strong>Seu Saldo</strong> {{ funds | currency }} </p>

  </v-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>