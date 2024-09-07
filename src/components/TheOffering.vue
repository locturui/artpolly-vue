<template>
  <section>
    <NarrowSection>
      <div class="wrapper">
        <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['reverse']">
          <template #header>Коворкинг</template>
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
    <div class="">
      <div class="container">
        <div class="image-container">
          <div class="content">
            <h1>Аренда</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, neque eget
              ultrices luctus, nunc orci condimentum massa, non tempor felis quam et magna. In
              venenatis dictum velit non convallis. Nullam mi libero, sollicitudin sit amet odio a,
              volutpat accumsan tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempor, neque eget ultrices luctus, nunc orci condimentum massa, non tempor felis quam
              et magna. In venenatis dictum velit non convallis. Nullam mi libero, sollicitudin sit
              amet odio a, volutpat accumsan tellus.
            </p>
            <ActionButton :classes="['btn']">Подробнее</ActionButton>
          </div>
        </div>
      </div>
    </div>
    <div class="narrow-wrap">
      <div class="wrapper">
        <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
          <template #header>Лекторий</template>
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
    </div>
    <TheFooter></TheFooter>
  </section>
</template>

<script setup lang="ts">
import ActionButton from './ActionButton.vue'
import NarrowSection from './NarrowSection.vue'
import InfoItem from './InfoItem.vue'
import TheFooter from './TheFooter.vue'
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  width: 100%;
}

.image-container {
  background-image: url('/image/bg-3.jpeg');
  background-size: cover;
  clip-path: polygon(0 0, 100% 18%, 100% 89%, 0 100%);
  width: 100vw;
  margin: 5em 0;
}

.content {
  width: 100vw;
  background: rgba(154, 160, 124, 0.6);
  padding: 10em 0;
  text-align: center;
}

.content p {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
}

.narrow-wrap {
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5em;
}
</style>
