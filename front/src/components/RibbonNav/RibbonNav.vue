<template>
    <nav class="w-ribbon min-w-ribbon max-w-ribbon h-screen bg-onyx-dark-1 flex flex-col items-center justify-between">
        <section class="w-full grid grid-flow-row auto-rows-auto place-items-center gap-1 dark:text-onyx-dark">
            <div v-for="project in Projects" :key="project.id" class="h-8 w-8 grid place-items-center rounded-md dark:hover:bg-onyx-dark-highlight dark:hover:text-onyx-dark-accent">
                <Icon :icon="project.icon" width="20" height="20" />
            </div>
        </section>

        <section class="w-full grid grid-flow-row auto-rows-auto place-items-center mb-10 gap-1 dark:text-onyx-dark">
            <div v-for="btn in RibbonButtons" :key="btn.id" class="h-8 w-8 grid place-items-center rounded-md dark:hover:bg-onyx-dark-highlight dark:hover:text-onyx-dark-accent">
                <Icon :icon="btn.icon" width="22" height="22" />
            </div>
        </section>
    </nav>
</template>

<style scoped>
nav:before {
    content: "";
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 2rem;
    left: 2.5rem;
    border-bottom-right-radius: 50%;
    box-shadow: 20px 0 0 0;
    color: #1E1F22;
    transform: rotate(180deg);
    z-index: -1;
}
</style>

<script src="./ProjectSelect"></script>