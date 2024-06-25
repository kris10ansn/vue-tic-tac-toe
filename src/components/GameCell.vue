<script setup lang="ts">
import GameIcon from "./icons/GameIcon.vue";

defineProps<{
    value: number;
    highlighted: boolean;
}>();

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
