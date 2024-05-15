<template>
  <div class="box">
    <img :src="props.imgUrl" alt="Фото иконки" />
    <h3><slot name="name"></slot></h3>
    <p><slot name="content"></slot></p>
    <div id="btn"><ActionButton :classes="['btn', 'white']">Регистрация</ActionButton></div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue'
const props = defineProps<{ imgUrl: string }>()
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 100%;
  height: 100%;
  margin: 0.4em;
  text-align: start;
}
#btn {
  margin-top: auto;
}
img {
  border-radius: 1.5em;
  width: 100%;
  height: 15em;
  object-fit: cover;
}
p {
  color: white;
  margin: 1em 0 1.7em 0;
  width: 80%;
}
h3 {
  font-size: 1.7em;
  color: white;
  margin: 1em 0 0 0;
}
</style>
