<script setup lang="ts">
import { ref } from "vue";
import GameBoard from "./GameBoard.vue";
import { Tic, stringifyTic } from "./Tic";
import getWinningCells from "./getWinningCells";

const turn = ref(Tic.X);
const board = ref(new Array<Tic>(9).fill(0));

const winningCells = ref(new Array<number>());
const winner = ref<Tic | -1>(-1);

function onMove(index: number) {
    if (winner.value > -1 || board.value[index] !== Tic.Empty) return;

    board.value[index] = turn.value;
    winningCells.value = getWinningCells(turn.value, board.value);

    if (winningCells.value.length === 1) {
        winner.value = Tic.Empty;
    } else if (winningCells.value.length > 1) {
        winner.value = turn.value;
    }

    turn.value = turn.value === Tic.X ? Tic.O : Tic.X;
}
</script>

<template>
    <div class="tic-tac-toe">
        <p v-if="winner === -1">{{ stringifyTic(turn) }}'s turn</p>
        <p v-else-if="winner !== Tic.Empty">{{ stringifyTic(winner) }} won!</p>
        <p v-else-if="winner === Tic.Empty">Draw!</p>
        <GameBoard :board="board" :highlighted="winningCells" @move="onMove" />
    </div>
</template>
