<template>
  <main class="home-wrapper">
    <HomeMainItem />

    <section class="about-section">
      <SharedNarrowSection class="desktop-only">
        <HomeAboutItem />
      </SharedNarrowSection>
      <div class="mobile-only">
        <HomeAboutItem />
      </div>
    </section>

    <section class="benefits-section">
      <div class="section-header">
        <div class="header-accent"></div>
        <h1>Специальные предложения</h1>
        <p class="subtitle">Выгодные условия для наших клиентов</p>
      </div>
      <SharedNarrowSection class="desktop-only">
        <HomeInfoIcons />
      </SharedNarrowSection>
      <div class="mobile-only">
        <HomeInfoIcons />
      </div>
    </section>

    <Suspense>
      <ClassesSection />
      <template #fallback> Loading... </template>
    </Suspense>

    <ScheduleSection />

    <Suspense>
      <EventsSection />
      <template #fallback> Loading... </template>
    </Suspense>

    <MapSection />

    <Suspense>
      <ContactSection id="contacts" />
    </Suspense>

    <LayoutFooter />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

definePageMeta({
  layout: 'default'
})

onMounted(() => {
  document.documentElement.style.scrollSnapType = 'y mandatory'
  document.documentElement.style.scrollPaddingTop = '80px'
})

onUnmounted(() => {
  document.documentElement.style.scrollSnapType = ''
  document.documentElement.style.scrollPaddingTop = ''
})
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.home-wrapper :deep(> *) {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.about-section {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 50%, var(--cream-dark) 100%);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -5%;
  transform: translateY(-50%);
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(212, 165, 154, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.benefits-section {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--warm-white) 0%, var(--cream) 100%);
  position: relative;
  overflow: hidden;
}

.benefits-section::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -8%;
  width: 500px;
  height: 500px;
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

.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
  padding: 0 1em;
}

@media (max-width: 768px) {
  .about-section {
    padding: 5em 1.5em;
  }

  .benefits-section {
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

  .desktop-only {
    display: none;
  }
  
  .mobile-only {
    display: block;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 4em 1em;
  }

  .about-section::before {
    display: none;
  }

  .benefits-section {
    padding: 4em 1em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }

  .benefits-section::before {
    display: none;
  }
}
</style>
