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
    margin-top: 2em;
}
h2{
  color: white;
  text-align: center;
  margin: 1em 0 0 0;
}
.events{
  display: flex;
  justify-content: space-between;
  padding: 2em;
  color: white;
}

.event-wrappers{
  
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>