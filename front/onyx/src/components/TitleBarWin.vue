<script>
import CloseWinIcon from '../assets/icons/appAction/closeWin.vue';
import MaximizeIcon from '../assets/icons/appAction/maximizeWin.vue';
import MinimizeIcon from '../assets/icons/appAction/minimizeWin.vue';
import DropWinIcon from '../assets/icons/appAction/dropWin.vue';

const { ipcRenderer } = require('electron');

export default {
  components: {
    CloseWin: CloseWinIcon,
    MaximizeWin: MaximizeIcon,
    MinimizeWin: MinimizeIcon,
    DropWin: DropWinIcon,
  },
  data() {
    return {
        isMaximized: false,
    };
  },
  mounted() {
  // Checks for window maximized state
  ipcRenderer.send('get-window-state');
  ipcRenderer.on('window-state', (_, isMaximized) => {
    this.isMaximized = isMaximized;
  });

  ipcRenderer.on('window-state-updated', (_, isMaximized) => {
    this.isMaximized = isMaximized;
  });

},
  methods: {
    minimizeWindow() {
      ipcRenderer.send('minimize-window'); // Drops the window
    },
    toggleFullscreen() {
        ipcRenderer.send('maximize-window'); // Toggles between maximized and minimized window
    },
    closeWindow() {
      ipcRenderer.send('close-window'); // Closes window
    },
  },
}
</script>

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