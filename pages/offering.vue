<template>
  <div class="page-wrapper">
    <section class="offerings-page">
      <div class="section-header">
        <div class="header-accent"></div>
        <h1>Дополнительные услуги</h1>
        <p class="subtitle">Больше возможностей для вашего творчества</p>
      </div>

      <div class="offerings-grid">
        <div class="offering-card">
          <div class="card-image">
            <img src="/image/photo_about.jpeg" alt="Коворкинг" />
          </div>
          <div class="card-content">
            <h2>Коворкинг/Аренда</h2>
            <p>
              Вы можете арендовать помещение или снять место для своих целей. Мы предоставляем комфортное рабочее место в уютной атмосфере. Для Вашего удобства в студии есть туалет и кухня с вкусным чаем, кофе и печеньками, холодильник, микроволновка и кулер. А в перерывах от работы вы можете отдохнуть, качаясь в гамаке.
            </p>
            <SharedActionButton :classes="['btn', 'dark-btn']">
              Подробнее
            </SharedActionButton>
          </div>
        </div>

        <div class="offering-card lectorium">
          <div class="card-image lectorium-image">
            <img src="/image/bg-3.jpeg" alt="Лекторий" />
          </div>
          <div class="card-content">
            <h2>Лекторий</h2>
            <p>
              В студии периодически проходят лекции по психологии и искусству. Не пропустите интересную для вас лекцию, следите внимательно за расписанием в наших социальных сетях
            </p>
            <SharedActionButton :classes="['btn', 'dark-btn']">
              Подробнее
            </SharedActionButton>
          </div>
        </div>

        <div class="offering-card">
          <div class="card-image">
            <img src="/image/photo_about.jpeg" alt="Подарочные сертификаты" />
          </div>
          <div class="card-content">
            <h2>Подарочные сертификаты</h2>
            <p>
              Сертификат можно приобрести на любую сумму, и оплатить мастер-класс.
            </p>
            <SharedActionButton :classes="['btn', 'dark-btn']">
              Подробнее
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
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.offerings-page {
  flex: 1;
  padding: 8em 2em 6em;
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
  position: relative;
  overflow: hidden;
}

.offerings-page::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -8%;
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

.offerings-grid {
  display: flex;
  flex-direction: column;
  gap: 3em;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.offering-card {
  background: var(--warm-white);
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(139, 115, 85, 0.12);
  border: 1px solid var(--soft-gray);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: row;
  min-height: 350px;
}

.offering-card:nth-child(even) {
  flex-direction: row-reverse;
}

.offering-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 50px rgba(139, 115, 85, 0.2);
}

.card-image {
  position: relative;
  width: 45%;
  overflow: hidden;
  flex-shrink: 0;
}

.lectorium-image {
  width: 50%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.offering-card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 3em 3em 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  flex: 1;
}

.card-content h2 {
  margin: 0;
  color: var(--text-primary);
  font-size: 2em;
  font-weight: 600;
}

.card-content p {
  margin: 0;
  line-height: 1.7;
  color: var(--text-secondary);
  font-size: 1.08em;
}

@media (max-width: 1024px) {
  .card-image {
    width: 40%;
  }

  .lectorium-image {
    width: 45%;
  }

  .card-content {
    padding: 2.5em 2.5em;
  }
}

@media (max-width: 768px) {
  .offerings-page {
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

  .offerings-grid {
    gap: 2.5em;
  }

  .offering-card {
    flex-direction: column;
    min-height: auto;
  }

  .offering-card:nth-child(even) {
    flex-direction: column;
  }

  .card-image,
  .lectorium-image {
    width: 100%;
    height: 260px;
  }

  .card-content {
    padding: 2em;
  }

  .card-content h2 {
    font-size: 1.7em;
  }

  .card-content p {
    font-size: 1.05em;
  }
}

@media (max-width: 480px) {
  .offerings-page {
    padding: 5em 1em 3em;
  }

  .section-header {
    margin-bottom: 2.5em;
  }

  .offerings-grid {
    gap: 2em;
  }

  .card-image,
  .lectorium-image {
    height: 220px;
  }

  .card-content {
    padding: 1.8em 1.5em;
    gap: 1.5em;
  }

  .card-content h2 {
    font-size: 1.5em;
  }

  .card-content p {
    font-size: 1em;
  }

  .offerings-page::before {
    display: none;
  }
}
</style>
