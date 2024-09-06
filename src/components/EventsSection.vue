<template>
  <section>
    <div class="bg">
      <div class="fix"></div>
    </div>
    <div class="box">
      <div class="event-wrapper">
        <h2>Ближайшие события</h2>
        <carousel :items-to-show="columns" :items-to-scroll="columns" :snap-align="'start'" :wrap-around="true">
          <slide v-for="event of events" :key="event.id">
            <EventItem :imgUrl="event.url">
              <template #name>{{ event.name }}</template>
              <template #content>{{ event.content }} </template>
            </EventItem>
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
<script setup>
import { reactive, computed } from 'vue'
import EventItem from './EventItem.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useWindowSize } from '@vueuse/core'

const uri = import.meta.env.VITE_BASE_URI

const { width } = useWindowSize()

const columns = computed(() => {
  if (width.value >= 1200) return 4 // Fullscreen
  if (width.value >= 768) return 3 // Medium screen
  return 1 // Mobile screen
})

const events = reactive([])

const res = await fetch(uri + '/event')
const data = await res.json()
console.log(data)
data.forEach((e) => {
  const event = {
    id: e.ID,
    name: e.Title,
    content: e.Description,
    url: e.ImageURL
  }
  events.push(event)
})
</script>
<style scoped>
section {
  margin-top: 3em;
}
.bg {
  position: relative;
  background-image: url('/image/bg-2.svg');
  width: 100%;
  padding-top: 5.25%;
  background-size: contain;
  background-repeat: no-repeat;
}
.fix {
  position: absolute;
  bottom: 0;
  background-color: #83a165;
  height: 1px;
  width: 100%;
}
.box {
  background-color: #83a165;
  padding-bottom: 1em;
}
h2 {
  color: white;
  text-align: center;
  margin: 0;
}
.events {
  display: flex;
  justify-content: space-between;
  padding: 2em;
  color: white;
}

.event-wrapper {
  margin: 0 1em;
}
</style>
