<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const columns = computed(() => {
  if (width.value >= 1200) return 4
  if (width.value >= 768) return 3
  return 1
})

interface ClassItemType {
  id: number
  name: string
  price: number
  content: string
}

interface ClassCategory {
  ID: number
  Title: string
  Description: string
  Classes: {
    ID: number
    Title: string
    Price: number
    Description: string
  }[]
}

const { data: categories } = await useFetch<ClassCategory[]>('/api/class')

const classesAPI = computed<ClassItemType[]>(() => {
  if (!categories.value) return []
  
  const classes: ClassItemType[] = []
  for (let cat of categories.value) {
    for (let a_class of cat.Classes) {
      classes.push({
        id: a_class.ID,
        name: a_class.Title,
        price: a_class.Price,
        content: a_class.Description
      })
    }
  }
  return classes
})
</script>

<template>
  <section class="classes-section">
      <div class="section-header">
        <div class="header-accent"></div>
        <h1>Мастер классы</h1>
        <p class="subtitle">Откройте для себя искусство вместе с нами</p>
      </div>
    <div class="wrapper">
      <Carousel :items-to-show="columns" :items-to-scroll="columns" :snap-align="'start'" :wrap-around="true">
        <Slide v-for="course in classesAPI" :key="course.id">
          <ClassesItem>
            <template #name>{{ course.name }}</template>
            <template #price>{{ course.price }}р/час</template>
            <template #content>{{ course.content }}</template>
          </ClassesItem>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
.classes-section {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--accent-light) 0%, var(--cream) 50%, var(--warm-white) 100%);
  position: relative;
  overflow: hidden;
}

.classes-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 115, 85, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.classes-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(212, 165, 154, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 4em;
  position: relative;
  z-index: 10;
}

.header-accent {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0 auto 1.5em;
  border-radius: 2px;
}

h1 {
  margin-bottom: 0.5em;
  color: var(--text-primary);
}

.subtitle {
  font-size: 1.1em;
  color: var(--text-secondary);
  font-weight: 400;
  margin-top: 0.8em;
}

.wrapper {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 0 1em 2em;
  overflow: visible;
}

.wrapper :deep(.carousel) {
  overflow: visible;
}

.wrapper :deep(.carousel__viewport) {
  overflow: visible;
}

.wrapper :deep(.carousel__track) {
  padding: 1em 0 2em;
}

@media (max-width: 768px) {
  .classes-section {
    padding: 5em 1.5em;
  }

  .section-header {
    margin-bottom: 3em;
  }

  .header-accent {
    width: 60px;
    margin-bottom: 1em;
  }

  .subtitle {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .classes-section {
    padding: 4em 1em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }

  .wrapper {
    padding: 0 0.5em 2em;
  }

  .classes-section::before,
  .classes-section::after {
    display: none;
  }
}
</style>
