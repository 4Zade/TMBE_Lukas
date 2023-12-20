<template>
    <div class="grid place-items-center w-6 h-6 rounded cursor-pointer">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
            <path d="m21 21-6-6"></path>
        </svg>
    </div>
</template>

<style scoped>
    div:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    svg {
        transition: 0.3s;
    }

    svg:active {
        color: rgb(204, 204, 204);
    }
</style>