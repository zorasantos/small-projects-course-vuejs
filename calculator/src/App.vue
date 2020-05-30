<template>
  <div id="app">
    <Calculator />
    <router-view/>
  </div>
</template>

<script>
import Calculator from '../src/main/Calculator'
export default {
  components: {
    Calculator
  }
}
</script>

<style>
</style>
