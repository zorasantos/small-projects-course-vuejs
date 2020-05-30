<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>
  .display {
    grid-column: span 5;
    background-color: #0004;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px;
    font-size: 2.1em;
    overflow: hidden;
  }
</style>