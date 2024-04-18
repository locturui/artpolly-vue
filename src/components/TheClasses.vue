<template>
  <NarrowSection>
    <div class="wrapper">
      <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
        <template #header>Для детей</template>
        <template #content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur enim iaculis,
          ultrices nisi non, tincidunt mi. Aenean ultricies consequat ipsum sit amet porttitor.
          Proin laoreet diam arcu, in semper dolor pulvinar sit amet. Nam mi justo, gravida quis
          enim ultrices, consectetur fringilla velit. Sed nec lacus maximus, dapibus neque vitae,
          dignissim quam. Phasellus eu eros justo. Donec rutrum sem erat, commodo consequat est
          vehicula vitae.
        </template>
        <template #button>
          <ActionButton :classes="['btn', 'dark-btn']">Записаться</ActionButton>
        </template>
      </InfoItem>
    </div>
    <div class="wrapper">
      <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['reverse']">
        <template #header>Для взрослых</template>
        <template #content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur enim iaculis,
          ultrices nisi non, tincidunt mi. Aenean ultricies consequat ipsum sit amet porttitor.
          Proin laoreet diam arcu, in semper dolor pulvinar sit amet. Nam mi justo, gravida quis
          enim ultrices, consectetur fringilla velit. Sed nec lacus maximus, dapibus neque vitae,
          dignissim quam. Phasellus eu eros justo. Donec rutrum sem erat, commodo consequat est
          vehicula vitae.
        </template>
        <template #button>
          <ActionButton :classes="['btn', 'dark-btn']">Записаться</ActionButton>
        </template>
      </InfoItem>
    </div>
    <div class="wrapper">
      <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
        <template #header>Мероприятия</template>
        <template #content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur enim iaculis,
          ultrices nisi non, tincidunt mi. Aenean ultricies consequat ipsum sit amet porttitor.
          Proin laoreet diam arcu, in semper dolor pulvinar sit amet. Nam mi justo, gravida quis
          enim ultrices, consectetur fringilla velit. Sed nec lacus maximus, dapibus neque vitae,
          dignissim quam. Phasellus eu eros justo. Donec rutrum sem erat, commodo consequat est
          vehicula vitae.
        </template>
        <template #button>
          <ActionButton :classes="['btn', 'dark-btn']">Записаться</ActionButton>
        </template>
      </InfoItem>
    </div>
  </NarrowSection>
</template>

<script setup lang="ts">
import InfoItem from './InfoItem.vue'
import ActionButton from './ActionButton.vue'
import NarrowSection from './NarrowSection.vue'
</script>

<style scoped>
.wrapper {
  margin-bottom: 8em;
}
</style>
