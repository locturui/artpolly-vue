<template>
    <secction class="box">
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
    </secction>
</template>
<script setup>
import EventItem from './EventItem.vue'
</script>
<style scoped>
.box{
    background-color: #83A165;
    margin-top: 2.5em;
}
.h2{
display: block;
  width: fit-content;
  margin: auto;
  color: white;
}
.events{
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  color: white;
}

.event-wrappers{
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
</style>