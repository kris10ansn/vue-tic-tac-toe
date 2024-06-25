<script setup lang="ts">
import { ref } from "vue";
import GameCell from "./GameCell.vue";

const board = ref(new Array(9).fill(0));
const turn = ref(1);
const winner = ref(-1);
const highlightedCells = ref<number[]>([]);

function getWinningCells(player: number) {
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < 3; i++) {
        let horizontal = 0;
        let vertical = 0;

        if (board.value[i + i * 3] === player) diagonal1++;
        if (board.value[2 - i + i * 3] === player) diagonal2++;

        for (let j = 0; j < 3; j++) {
            if (board.value[i * 3 + j] === player) horizontal++;
            if (board.value[i + j * 3] === player) vertical++;
        }

        if (horizontal === 3) {
            return [i * 3, i * 3 + 1, i * 3 + 2];
        }

        if (vertical === 3) {
            return [i, i + 3, i + 6];
        }
    }

    if (diagonal1 === 3) {
        return [0, 4, 8];
    }
    if (diagonal2 === 3) {
        return [2, 4, 6];
    }

    return [];
}

function onCellClick(index: number) {
    if (board.value[index] > 0 || winner.value > -1) {
        return;
    }

    board.value[index] = turn.value;

    const winningCells = getWinningCells(turn.value);

    if (winningCells.length > 0) {
        highlightedCells.value = winningCells;
        winner.value = turn.value;
        return;
    } else if (board.value.every((cell) => cell > 0)) {
        winner.value = 0;
        return;
    }

    turn.value = turn.value === 1 ? 2 : 1;
}
</script>

<template>
    <p>Turn: {{ turn === 1 ? "x" : "o" }}</p>

    <div class="game-board">
        <GameCell
            v-for="(value, index) in board"
            :key="index"
            :value="value"
            :highlighted="highlightedCells.indexOf(index) > -1"
            @click="onCellClick(index)"
        />
    </div>
    <p v-if="winner > 0">{{ winner === 1 ? "x" : "0" }} won!</p>
    <p v-if="winner === 0">Draw!</p>
</template>

<style scoped>
.game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
}
</style>
