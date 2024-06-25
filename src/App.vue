<script setup lang="ts">
import TicTacToe from "./components/TicTacToe.vue";
</script>

<template>
    <div id="app">
        <h1>Tic tac toe</h1>
        <TicTacToe />
    </div>
</template>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
