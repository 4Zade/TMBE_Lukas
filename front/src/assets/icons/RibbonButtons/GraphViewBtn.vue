<template>
    <div class="graphBtn grid place-items-center w-6 h-6 rounded cursor-pointer">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 15H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path>
            <path d="M19 15h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path>
            <path d="M13 3h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
            <path d="M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path>
            <path d="M12 9v3"></path>
        </svg>
    </div>
</template>

<style scoped>
    .graphBtn:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    svg {
        transition: 0.3s;
    }

    svg:active {
        color: rgb(204, 204, 204);
    }
</style>