<template>
    <nav class="ribbon-container h-screen flex flex-col justify-between z-40">
        <div class="grid place-items-center project-grid z-50">
            <Icon v-for="Project in Projects" :icon="Project.icon" :key="Project.key" width="20" height="20" />
        </div>

        <div class="grid settings-grid place-items-center">
            <Icon v-for="btn in ribbonButtons" :key="btn.name" :icon="btn.icon" width="20" height="20" />
        </div>
    </nav>
</template>

<style scoped>
    .purple-background {
        background-color: purple;
        color: white; /* You can adjust the text color for better visibility */
    }
</style>

<script src="./ProjectSelect"></script>