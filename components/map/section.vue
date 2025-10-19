<template>
  <section class="map-section">
    <div class="section-header">
      <div class="header-accent"></div>
      <h1>Как нас найти</h1>
      <p class="subtitle">Приходите в гости в нашу студию</p>
    </div>
    <div class="map-container">
      <a
        href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
        class="map-link"
      >
        Санкт‑Петербург
      </a>
      <a
        href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.293243%2C59.972945&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=30.293243%2C59.972945&whatshere%5Bzoom%5D=20&z=14"
        class="map-link map-link-detail"
      >
        Санкт-Петербург, Песочная набережная, д. 16 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=30.293243%2C59.972945&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=30.293243%2C59.972945&whatshere%5Bzoom%5D=20&z=14"
        width="100%"
        height="500"
        frameborder="0"
        allowfullscreen="true"
        class="map-iframe"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.map-section {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--soft-gray) 0%, var(--cream) 50%, var(--warm-white) 100%);
  position: relative;
  overflow: hidden;
}

.map-section::before {
  content: '';
  position: absolute;
  bottom: -25%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(139, 115, 85, 0.05) 0%, transparent 70%);
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

.map-container {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 1.5em;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  z-index: 10;
}

.map-link {
  color: #eee;
  font-size: 12px;
  position: absolute;
  top: 0;
  z-index: 10;
}

.map-link-detail {
  top: 14px;
}

.map-iframe {
  display: block;
  width: 100%;
  height: 500px;
}

@media (max-width: 768px) {
  .map-section {
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
  
  .map-iframe {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .map-section {
    padding: 4em 1em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }
  
  .map-iframe {
    height: 300px;
  }
  
  .map-container {
    border-radius: 0.5em;
  }

  .map-section::before {
    display: none;
  }
}
</style>
