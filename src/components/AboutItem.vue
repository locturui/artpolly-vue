<template>
  <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
    <template #header>О нас</template>
    <template #content
      >АртПолли - студия для взрослых и детей, в которой каждый человек сможет раскрыть свой творческий потенциал, получить удовольствие от рисования и узнать, как помогать себе с помощью искусства. У нас дружелюбная среда, где комфортно людям любого возраста, и с разными возможностями здоровья. В нашей студии работают специалисты с высшим художественным и педагогическим образованиями.

    </template>
    <!-- <template #button>
          <ActionButton :classes="['btn', 'dark-btn']">kfldjklfj</ActionButton>
        </template> -->
  </InfoItem>
</template>

<script setup lang="ts">
import InfoItem from './InfoItem.vue'
</script>

<style scoped>

</style>
