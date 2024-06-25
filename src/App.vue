<script setup lang="ts">
import GameBoard from './components/GameBoard.vue'
</script>

<template>
  <div id="app">
    <h1>Tic tac toe</h1>
    <GameBoard />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
