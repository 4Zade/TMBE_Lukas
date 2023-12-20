<template>
    <nav id="title-bar" class="w-screen flex justify-end">
        <div id="drag" class="h-full grow"></div>

        <div id="minimize" class="winBtn grid h-full cursor-pointer place-items-center" @click="minimizeWindow">
            <DropWin/>
        </div>

        <div id="maximize" class="winBtn grid h-full cursor-pointer place-items-center" @click="toggleFullscreen">
            <MinimizeWin v-if="isMaximized"/>
            <MaximizeWin v-else />
        </div>

        <div id="close" class="winBtn grid h-full cursor-pointer place-items-center" @click="closeWindow">
            <CloseWin/>
        </div>
    </nav>
</template>

<script src="./manageWindow"></script>