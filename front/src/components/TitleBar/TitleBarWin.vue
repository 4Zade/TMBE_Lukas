<template>
    <nav id="title-bar" class="w-screen flex justify-end dark:bg-onyx-dark-1 bg-onyx-light-1 h-tb text-onyx-light dark:text-onyx-dark">
        <div id="drag" class="h-full grow"></div>

        <div id="minimize" class="winBtn grid h-full cursor-pointer place-items-center w-ribbon dark:hover:bg-onyx-dark-highlight dark:hover:text-white" @click="minimizeWindow">
            <DropWin/>
        </div>

        <div id="maximize" class="winBtn grid h-full cursor-pointer place-items-center w-ribbon dark:hover:bg-onyx-dark-highlight dark:hover:text-white" @click="toggleFullscreen">
            <MinimizeWin v-if="isMaximized"/>
            <MaximizeWin v-else />
        </div>

        <div id="close" class="winBtn grid h-full cursor-pointer place-items-center w-ribbon dark:hover:bg-red-500 dark:hover:text-white" @click="closeWindow">
            <CloseWin/>
        </div>
    </nav>
</template>

<script src="./manageWindow"></script>

<style>
#drag {
    -webkit-app-region: drag;
}
</style>