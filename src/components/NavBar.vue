<script setup lang="ts">
import ActionButton from './ActionButton.vue'
</script>

<template>
  <div class="bar">
    <div class="logo"></div>
    <ActionButton :classes="['btn', 'nav-btn']">Узнать больше</ActionButton>
  </div>
</template>

<style>
.bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #FFD0D4;
  opacity: 80%;
  padding: 0.5em;
  width: 75%;
  margin: 1em auto;
  border-radius: 3em;
}
.logo {
  background-color: white;
  border-radius: 50%;
  width: 4em;
  height: 4em;
}
</style>
