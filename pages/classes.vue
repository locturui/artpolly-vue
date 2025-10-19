<template>
  <div class="page-wrapper">
    <section class="classes-page">
      <div class="section-header">
        <div class="header-accent"></div>
        <h1>Наши направления</h1>
        <p class="subtitle">Выберите подходящий курс для творческого развития</p>
      </div>

      <div class="classes-grid">
        <div v-for="cat in data" :key="cat.ID" class="class-card">
          <div class="card-image">
            <img src="/image/photo_about.jpeg" :alt="cat.Title" />
            <div class="card-overlay">
              <h2>{{ cat.Title }}</h2>
            </div>
          </div>
          <div class="card-content">
            <p>{{ cat.Description }}</p>
            <SharedActionButton :classes="['btn', 'dark-btn']">
              Записаться
            </SharedActionButton>
          </div>
        </div>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

interface ClassCategory {
  ID: number
  Title: string
  Description: string
  Classes: any[]
}

const { data } = await useFetch<ClassCategory[]>('/api/class')
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.classes-page {
  flex: 1;
  padding: 8em 2em 6em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
  position: relative;
  overflow: hidden;
}

.classes-page::before {
  content: '';
  position: absolute;
  top: 10%;
  left: -8%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 115, 85, 0.06) 0%, transparent 70%);
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

.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3em;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.class-card {
  background: var(--warm-white);
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(139, 115, 85, 0.12);
  border: 1px solid var(--soft-gray);
  transition: all 0.4s ease;
}

.class-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 50px rgba(139, 115, 85, 0.2);
}

.card-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.class-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(45, 40, 34, 0.9) 0%, rgba(45, 40, 34, 0.6) 60%, transparent 100%);
  padding: 2em 2em 1.5em;
}

.card-overlay h2 {
  margin: 0;
  color: white;
  font-size: 1.8em;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-content {
  padding: 2em 2em 2.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.card-content p {
  margin: 0;
  line-height: 1.7;
  color: var(--text-secondary);
  font-size: 1.05em;
}

@media (max-width: 768px) {
  .classes-page {
    padding: 6em 1.5em 4em;
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

  .classes-grid {
    grid-template-columns: 1fr;
    gap: 2.5em;
  }

  .card-image {
    height: 240px;
  }

  .card-overlay h2 {
    font-size: 1.6em;
  }

  .card-content {
    padding: 1.5em 1.8em 2em;
  }
}

@media (max-width: 480px) {
  .classes-page {
    padding: 5em 1em 3em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }

  .classes-grid {
    gap: 2em;
  }

  .card-image {
    height: 200px;
  }

  .card-overlay {
    padding: 1.5em 1.5em 1em;
  }

  .card-overlay h2 {
    font-size: 1.4em;
  }

  .card-content {
    padding: 1.5em;
  }

  .card-content p {
    font-size: 1em;
  }

  .classes-page::before {
    display: none;
  }
}
</style>
