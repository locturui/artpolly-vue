<template>
    <div class="box">
        <img :src="props.imgUrl" alt="Фото иконки" />
        <h3><slot name="name"></slot></h3>
        <p><slot name="content"></slot></p>
        <ActionButton :classes="['btn', 'white']">Регситрация</ActionButton>
    </div>
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue'
const props = defineProps<{imgUrl: string}>()
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 22%;
  margin: 0.5em;
}
img {
  border-radius: 1.5em;
}
p {
  color: white;
  margin: 1em 0 1.7em 0;
}
h3 {
  font-size: 1.7em;
  color: white;
  margin: 1em 0 0 0;
}
</style>
