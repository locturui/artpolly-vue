<script setup lang="ts">
import { ref } from 'vue'
import ClassItem from './ClassItem.vue'

interface ClassItemType {
  id: number
  name: string
  price: number
  content: string
}

const classesAPI = ref<ClassItemType[]>([])

const res = await fetch('http://localhost:3000/class')
const data = await res.json()
for (let cat of data) {
  for (let a_class of cat.Classes) {
    let newClass: ClassItemType = {
      id: a_class.ID,
      name: a_class.Title,
      price: a_class.Price,
      content: a_class.Description
    }
    classesAPI.value.push(newClass)
  }
}

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
      <div class="eh">
        <h2>Мастер классы</h2>
        <div class="classes-wrapper">
          <ClassItem v-for="course of classesAPI" :key="course.id">
            <template #name>{{ course.name }}</template>
            <template #price>{{ course.price }}р/час</template>
            <template #content>{{ course.content }}</template>
          </ClassItem>
        </div>
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
.eh {
  width: 100%;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.classes-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  padding: 2em;
}
h2 {
  display: block;
  width: fit-content;
  margin: auto;
}
</style>
