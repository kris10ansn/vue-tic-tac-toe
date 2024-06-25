<script setup lang="ts">
import type { Tic } from "./Tic";
import GameIcon from "./icons/GameIcon.vue";

withDefaults(
    defineProps<{
        value: Tic;
        highlighted?: boolean;
    }>(),
    { highlighted: false }
);

const emit = defineEmits(["click"]);
</script>

<template>
    <div class="game-cell" :class="{ highlighted }" @click="emit('click')">
        <GameIcon v-if="value > 0" :value="value" />
    </div>
</template>

<style scoped lang="scss">
.game-cell {
    border: 1px solid black;
    width: 12rem;
    height: 12rem;

    &.highlighted {
        background: blue;
    }
}
</style>
