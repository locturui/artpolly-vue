<script setup lang="ts">
import ActionButton from './ActionButton.vue'
</script>

<template>
  <div class="bar">
    <img />
    <ActionButton :classes="['btn', 'red']">Узнать больше</ActionButton>
  </div>
</template>

<style>
.bar {
  display: flex;
  flex-direction: row;
}
</style>
