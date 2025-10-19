<template>
    <div class="box">
        <h3><slot name="name"></slot></h3>
        <p><slot name="content"></slot></p>
    </div>
</template>
<script setup>

</script>
<style scoped>
.box {
    background: var(--warm-white);
    backdrop-filter: blur(10px);
    padding: 1em 1.5em;
    border-radius: 1.5em;
    box-shadow: 0 4px 15px rgba(139, 115, 85, 0.08);
    border: 1px solid var(--soft-gray);
    transition: all 0.3s ease;
}

.box:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(139, 115, 85, 0.12);
    border-color: var(--accent);
}

h3 {
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5em;
}

p {
    color: var(--text-secondary);
    line-height: 1.5;
}
</style>