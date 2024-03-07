<script setup lang="ts">
defineProps<{
  members: { name: string, role: string }[]
}>();
</script>

<template>
    <div class="members">
        <div v-for="member in members" class="member">
            <div class="name">{{ member.name }}</div>
            <div class="role">{{ member.role }}</div>
        </div>
    </div>
</template>

<style scoped>
.members {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
}

.member {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px;
    height: 80px;
    width: 160px;
    background: var(--vp-c-bg-soft);
    border-radius: 8px;
}

.name {
    text-align: center;
    font-weight: 600;
}

.role {
    text-align: center;
    font-size: 0.875em;
    color: var(--vp-c-text-2);
}
</style>