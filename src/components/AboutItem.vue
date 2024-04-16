<template>
  <section>
    <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
      <template #header>О нас</template>
      <template #content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur enim iaculis,
        ultrices nisi non, tincidunt mi. Aenean ultricies consequat ipsum sit amet porttitor. Proin
        laoreet diam arcu, in semper dolor pulvinar sit amet. Nam mi justo, gravida quis enim
        ultrices, consectetur fringilla velit. Sed nec lacus maximus, dapibus neque vitae, dignissim
        quam. Phasellus eu eros justo. Donec rutrum sem erat, commodo consequat est vehicula vitae.
      </template>
      <!-- <template #button>
        <ActionButton :classes="['btn', 'dark-btn']">kfldjklfj</ActionButton>
      </template> -->
    </InfoItem>
  </section>
</template>
<script setup>
import InfoItem from './InfoItem.vue'
import ActionButton from './ActionButton.vue'
</script>
<style scoped>
section {
  width: 60%;
  margin: auto;
  padding-top: 7em;
}
</style>
