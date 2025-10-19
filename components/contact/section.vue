<template>
  <section class="contacts">
    <div class="section-header">
      <div class="header-accent"></div>
      <h1>Наши контакты</h1>
      <p class="subtitle">Свяжитесь с нами удобным способом</p>
    </div>
    <div class="info-contact">
      <div class="contact-item" v-if="contacts">
        <span class="label">Телефон</span>
        <a :href="'tel:' + contacts.Phone" class="value">{{ contacts.Phone }}</a>
      </div>
      
      <div class="contact-item" v-if="contacts">
        <span class="label">Email</span>
        <a :href="'mailto:' + contacts.Email" class="value">{{ contacts.Email }}</a>
      </div>
      
      <div class="contact-item" v-if="contacts">
        <span class="label">Адрес</span>
        <span class="value">{{ contacts.Address }}</span>
      </div>
      
      <div class="contact-item" v-if="contacts">
        <span class="label">Часы работы</span>
        <span class="value">{{ contacts.WHours }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Contacts {
  Phone: string
  Email: string
  Address: string
  WHours: string
}

const { data: contactsData } = await useFetch<Contacts>('/api/contacts')

const contacts = computed(() => contactsData.value || {
  Phone: '',
  Email: '',
  Address: '',
  WHours: ''
})
</script>

<style scoped>
.contacts {
  padding: 5em 2em;
  background: linear-gradient(135deg, var(--secondary-light) 0%, var(--accent-light) 50%, var(--warm-white) 100%);
  position: relative;
  overflow: hidden;
}

.contacts::before {
  content: '';
  position: absolute;
  top: -40%;
  right: -12%;
  width: 650px;
  height: 650px;
  background: radial-gradient(circle, rgba(212, 165, 154, 0.12) 0%, transparent 70%);
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
  background: linear-gradient(90deg, transparent, var(--secondary), transparent);
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

.info-contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5em 4em;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.label {
  font-size: 0.85em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary);
}

.value {
  font-size: 1.2em;
  color: var(--text-primary);
  line-height: 1.6;
  transition: color 0.2s ease;
}

a.value {
  text-decoration: none;
  position: relative;
}

a.value::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: width 0.3s ease;
}

a.value:hover {
  color: var(--secondary-dark);
}

a.value:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .contacts {
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
  
  .info-contact {
    grid-template-columns: 1fr;
    gap: 2em;
  }

  .value {
    font-size: 1.1em;
  }
}

@media (max-width: 480px) {
  .contacts {
    padding: 4em 1em;
  }
  
  .section-header {
    margin-bottom: 2.5em;
  }
  
  .info-contact {
    gap: 1.5em;
  }

  .label {
    font-size: 0.8em;
  }

  .value {
    font-size: 1em;
  }

  .contacts::before {
    display: none;
  }
}
</style>

