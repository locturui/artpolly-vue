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
    <div class="wrapper">
      <h2>Мастер классы</h2>
      <div class="classes-wrapper">
        <ClassItem v-for="course of classes" :key="course.id">
          <template #name>{{ course.name }}</template>
          <template #price>{{ course.price }}р/час</template>
          <template #content>{{ course.content }}</template>
        </ClassItem>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg {
  margin-top: 2.5em;
  background-image: url('/image/bg-1.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 60%;
  position: relative;
}
.wrapper {
  position: absolute;
  top: 2em;
}
.classes-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2rem;
}
h2 {
  display: block;
  width: fit-content;
  margin: auto;
  margin-top: 4em;
}
</style>
