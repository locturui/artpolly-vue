<template>
  <div class="box">
    <div class="header">
      <h3><slot name="name"></slot></h3>
      <span><slot name="price"></slot></span>
    </div>
    <div class="content">
      <p><slot name="content"></slot></p>
      <ActionButton :classes="['btn', 'green']">Выбрать</ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue'
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 24%;
  margin: 0.4em;
}
.header {
  background-color: #83a165;
  color: white;
  padding: 2em 2em 2em 1.4em;
  border-radius: 2em 2em 0 0;
  font-weight: bold;
}
.content {
  background-color: white;
  color: inherit;
  border-radius: 0 0 2em 2em;
  padding: 2em 1.4em;
}
p {
  margin-bottom: 5rem;
}
h3 {
  margin: 0;
  font-size: 1.7em;
}
</style>
