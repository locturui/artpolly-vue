<script setup lang="ts">
import ClassItem from './ClassItem.vue'
const classes = [
  {
    id: 1,
    name: 'Старт',
    price: 5000,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor,  neque eget ultrices luctus, nunc orci condimentum massa, non tempor  felis quam et magna'
  },
  {
    id: 2,
    name: 'Старт',
    price: 6000,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor,  neque eget ultrices luctus, nunc orci condimentum massa, non tempor  felis quam et magna'
  },
  {
    id: 3,
    name: 'Старт',
    price: 7000,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor,  neque eget ultrices luctus, nunc orci condimentum massa, non tempor  felis quam et magna'
  },
  {
    id: 4,
    name: 'Старт',
    price: 8000,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor,  neque eget ultrices luctus, nunc orci condimentum massa, non tempor  felis quam et magna'
  }
]
</script>

<template>
  <section class="bg">
    <h2>Мастер классы</h2>
    <div class="classes-wrapper">
      <ClassItem v-for="course of classes" :key="course.id">
        <template #name>{{ course.name }}</template>
        <template #price>{{ course.price }}р/час</template>
        <template #content>{{ course.content }}</template>
      </ClassItem>
    </div>
  </section>
</template>

<style scoped>
.bg {
  background-image: url('/image/bg-1.svg');
  background-size: cover;
  width: 100%;
  padding-bottom: 14em;
}
.classes-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
}
h2 {
  font-size: 3em;
  display: block;
  width: fit-content;
  margin: auto;
  margin-top: 5em;
}
</style>
