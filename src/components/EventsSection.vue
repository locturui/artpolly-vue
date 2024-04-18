<template>
  <section>
    <div class="bg">
      <div class="fix"></div>
    </div>
    <div class="box">
      <div class="event-wrapper">
        <h2>Ближайшие события</h2>
        <div class="events">
          <EventItem imgUrl="/image/photo_pot.jpeg">
            <template #name>Творчество рядом</template>
            <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
          </EventItem>
          <EventItem imgUrl="/image/photo_pot.jpeg">
            <template #name>Творчество рядом</template>
            <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
          </EventItem>
          <EventItem imgUrl="/image/photo_pot.jpeg">
            <template #name>Творчество рядом</template>
            <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
          </EventItem>
          <EventItem imgUrl="/image/photo_pot.jpeg">
            <template #name>Творчество рядом</template>
            <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </template>
          </EventItem>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import EventItem from './EventItem.vue'
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
