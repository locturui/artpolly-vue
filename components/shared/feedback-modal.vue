<template>
<Transition name="modal">
  <div v-if="isVisible" class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <button class="close-btn" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <div class="modal-header">
        <div class="header-accent"></div>
        <h2>Свяжитесь с нами</h2>
        <p class="subtitle">Мы ответим в ближайшее время</p>
      </div>
      
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input v-model="formData.name" type="text" id="name" placeholder="Иван Иванов" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="formData.email" type="email" id="email" placeholder="example@email.com" required />
        </div>
        
        <div class="form-group">
          <label for="feedback">Сообщение</label>
          <textarea v-model="formData.message" id="feedback" rows="4" placeholder="Напишите ваше сообщение..." required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">
          Отправить сообщение
        </button>
      </form>
    </div>
  </div>
</Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { isVisible, closeModal } = useModal()
const emit = defineEmits(['submitFeedback'])

const formData = ref({
  email: '',
  name: '',
  message: ''
})

const submitForm = async () => {
  const payload = {
    email: formData.value.email,
    name: formData.value.name,
    message: formData.value.message
  }

  try {
    const data = await $fetch('/api/form', {
      method: 'POST',
      body: payload
    })

    emit('submitFeedback', data)
    
    formData.value = {
      email: '',
      name: '',
      message: ''
    }
    
    closeModal()
    alert('Форма успешно отправлена!')
  } catch (error) {
    console.error(error)
    alert('Что-то пошло не так. Попробуйте отправить форму снова')
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  padding: 1em;
}

.modal {
  background: linear-gradient(135deg, var(--warm-white) 0%, var(--cream) 100%);
  padding: 3em;
  border-radius: 2em;
  width: 500px;
  max-width: 100%;
  box-shadow: 0 20px 60px rgba(45, 40, 34, 0.3);
  border: 1px solid var(--soft-gray);
  position: relative;
  z-index: 10000000;
}

.modal-header {
  text-align: center;
  margin-bottom: 2.5em;
}

.header-accent {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  margin: 0 auto 1em;
  border-radius: 2px;
}

h2 {
  margin: 0 0 0.5em 0;
  font-size: 2em;
  color: var(--text-primary);
  font-weight: 600;
}

.subtitle {
  margin: 0;
  font-size: 0.95em;
  color: var(--text-secondary);
  font-weight: 400;
}

.close-btn {
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  background: var(--soft-gray);
  border: none;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: var(--text-muted);
}

.close-btn:hover {
  background: var(--accent);
  transform: rotate(90deg);
  color: var(--text-primary);
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9em;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

input,
textarea {
  width: 100%;
  padding: 0.9em 1.2em;
  margin-top: 0.3em;
  border: 2px solid var(--soft-gray);
  border-radius: 1em;
  font-family: inherit;
  font-size: 1em;
  transition: all 0.3s ease;
  background: white;
  color: var(--text-primary);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: white;
  box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
}

textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.submit-btn {
  width: 100%;
  padding: 1em 2em;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  border: none;
  border-radius: 3em;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 115, 85, 0.3);
  margin-top: 0.5em;
}

.submit-btn:hover {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--sage-light) 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 115, 85, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.9) translateY(20px);
}

@media (max-width: 480px) {
  .modal {
    padding: 2em 1.5em;
    border-radius: 1.5em;
  }

  h2 {
    font-size: 1.6em;
  }

  .close-btn {
    top: 1em;
    right: 1em;
    width: 2.2em;
    height: 2.2em;
  }

  input,
  textarea {
    padding: 0.8em 1em;
  }

  .submit-btn {
    padding: 0.9em 1.5em;
  }
}
</style>
  