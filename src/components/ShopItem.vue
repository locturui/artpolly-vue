<template>
    <div class="box">
        <img :src="props.imgUrl" alt="Фото иконки" />
        <span><slot name="name"></slot></span>
        <span class="price"><slot name="price"></slot></span>
        <p><slot name="content"></slot></p>
        <ActionButton :classes="['btn', 'black']">Купить</ActionButton>
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
  width: 25%;
  margin: 0.5em;
}
img {
  border-radius: 1.5em;
  width: 100%;
  margin: 0 0 1em 0;
}
p {
  margin: 1em 0 1.7em 0;
}
span {
  font-size: 1.7em;
}
.price{
    opacity: 65%;
}
</style>
