<template>
  <section>
    <!-- Conditionally applying styles to narrow-wrap for desktop -->
    <div class="narrow-wrap" :class="{ 'mobile-view': isMobile }">
      <div class="wrapper">
        <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['reverse']">
          <template #header>Коворкинг/Аренда</template>
          <template #content>
            Вы можете арендовать помещение или снять место для своих целей Мы предоставляем комфортное рабочее место в уютной атмосфере. Для Вашего удобства в студии есть туалет и кухня с вкусным чаем, кофе и печеньками, холодильник, микроволновка и кулер. А в перерывах от работы вы можете отдохнуть, качаясь в гамаке. 
Для записи свяжитесь с нами
          </template>
          <template #button>
            <ActionButton :classes="['btn', 'dark-btn']">Подробнее</ActionButton>
          </template>
        </InfoItem>
      </div>
    </div>

    <!-- Image section with text -->
    <div class="image-section">
      <div class="container">
        <div class="image-container">
          <div class="content">
            <h1>Лекторий</h1>
            <p>
              В студии периодически проходят лекции по психологии и искусству. Не пропустите интересную для вас лекцию, следите внимательно за расписанием в наших социальных сетях
            </p>
            <ActionButton :classes="['btn']">Подробнее</ActionButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Second narrow-wrap section -->
    <div class="narrow-wrap" :class="{ 'mobile-view': isMobile }">
      <div class="wrapper">
        <InfoItem imgUrl="/image/photo_about.jpeg" :classes="['']">
          <template #header>Подарочные сертификаты</template>
          <template #content>
            Сертификат можно приобрести на любую сумму, и оплатить мастер-класс.
          </template>
          <template #button>
            <ActionButton :classes="['btn', 'dark-btn']">Подробнее</ActionButton>
          </template>
        </InfoItem>
      </div>
    </div>

    <TheFooter></TheFooter>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import ActionButton from './ActionButton.vue'
import InfoItem from './InfoItem.vue'
import TheFooter from './TheFooter.vue'

const { width } = useWindowSize()

const isMobile = computed(() => width.value <= 768)
</script>

<style scoped>
section {
  padding-top: 6em;
}
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

/* Default narrow-wrap styling for desktop */
.narrow-wrap {
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5em;
}

/* On mobile, remove narrow-wrap specific styles */
.mobile-view {
  width: 100%;
  margin: 0;
  margin-bottom: 2em;
}

@media (max-width: 768px) {
  .content p {
    width: 90%;
  }

  .image-container {
    margin: 3em 0;
  }

  .content {
    padding: 4em 0;
  }
}
</style>
