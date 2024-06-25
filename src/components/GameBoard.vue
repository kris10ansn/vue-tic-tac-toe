<script setup lang="ts">
import GameCell from "./GameCell.vue";
import type { Tic } from "./Tic";

defineProps<{ board: Tic[]; highlighted: number[] }>();
const emit = defineEmits(["move"]);
</script>

<template>
    <div class="game-board">
        <GameCell
            v-for="(value, index) in board"
            :key="index"
            :value="value"
            :highlighted="highlighted.indexOf(index) !== -1"
            @click="emit('move', index)"
        />
    </div>
</template>

<style scoped>
.game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
}
</style>
