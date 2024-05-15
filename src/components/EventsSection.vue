<template>
  <section>
    <div class="bg">
      <div class="fix"></div>
    </div>
    <div class="box">
      <div class="event-wrapper">
        <h2>Ближайшие события</h2>
        <div class="events">
          <EventItem v-for="event of events" :imgUrl="event.url" :key="event.id">
            <template #name>{{ event.name }}</template>
            <template #content>{{ event.content }} </template>
          </EventItem>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import EventItem from './EventItem.vue'
const uri = import.meta.env.VITE_BASE_URI

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

// const events = [
//   {
//     id: 1,
//     url: '/image/photo_pot.jpeg',
//     name: 'Творчество рядом',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//   },
//   {
//     id: 2,
//     url: '/image/photo_pot.jpeg',
//     name: 'Творчество рядом',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//   },
//   {
//     id: 3,
//     url: '/image/photo_pot.jpeg',
//     name: 'Творчество рядом',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//   },
//   {
//     id: 4,
//     url: '/image/photo_pot.jpeg',
//     name: 'Творчество рядом',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//   }
// ]
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

.event-wrappers {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
