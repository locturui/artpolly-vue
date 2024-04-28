<script setup lang="ts">
import { ref } from 'vue'
import ClassItem from './ClassItem.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

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
</script>

<template>
  <section class="bg">
    <div class="wrapper">
      <div class="eh">
        <h2>Мастер классы</h2>
        <carousel :items-to-show="4" :items-to-scroll="4">
          <slide v-for="course of classesAPI" :key="course.id">
            <ClassItem>
              <template #name>{{ course.name }}</template>
              <template #price>{{ course.price }}р/час</template>
              <template #content>{{ course.content }}</template>
            </ClassItem>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
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

h2 {
  display: block;
  width: fit-content;
  margin: auto;
  margin-bottom: 0.3em;
}
</style>
