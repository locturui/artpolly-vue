<template>
<div v-if="isVisible" class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
    <button class="close-btn" @click="closeModal">&times;</button>
    <h2>Форма связи</h2>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Email</label>
            <input v-model="formData.name" type="text" id="name" placeholder="Email" required />
        </div>
        <div class="form-group">
            <label for="name">Имя</label>
            <input v-model="formData.name" type="text" id="name" placeholder="Иван Иванов" required />
        </div>
        <div class="form-group">
            <label for="feedback">Сообщение</label>
            <textarea v-model="formData.message" id="feedback" placeholder="" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Отправить</button>
    </form>
    </div>
</div>
</template>

<script setup>
import { inject, ref } from 'vue';

const uri = import.meta.env.VITE_BASE_URI

// Injecting global modal state and control from the app
const modal = inject('modal');
const isVisible = modal.isVisible;
const closeModal = modal.closeModal;
const emit = defineEmits(['submitFeedback']);

// Feedback form data
const formData = ref({
email: '',
name: '',
message: ''
});

const submitForm = async () => {
const payload = {
    email: formData.value.email,
    name: formData.value.name,
    message: formData.value.feedback
};

// Placeholder for the API call
try {
    const response = await fetch(uri + '/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
    });

    if (!response.ok) {
    throw new Error('Failed to submit feedback');
    }

    const data = await response.json();
    emit('submitFeedback', data);
    closeModal();
} catch (error) {
    console.error(error);
    alert('Что-то пошло не так. Попробуйте отправить форму снова');
}
};
</script>

<style scoped>
.modal-backdrop {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.6);
display: flex;
justify-content: center;
align-items: center;
z-index: 9999999;
}

.modal {
background-color: #fff;
padding: 2rem;
border-radius: 8px;
width: 400px;
max-width: 100%;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
z-index: 10000000;
}

.close-btn {
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
font-size: 1.5rem;
cursor: pointer;
}

.form-group {
margin-bottom: 1rem;
}

input,
textarea {
width: 100%;
padding: 0.5rem;
margin-top: 0.5rem;
border: 1px solid #ccc;
border-radius: 4px;
}

.submit-btn {
padding: 0.75rem 1.5rem;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
}

.submit-btn:hover {
background-color: #0056b3;
}
</style>
  