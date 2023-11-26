<script>
import CloseMacIcon from '../assets/icons/appAction/closeMac.vue';
import DropMacIcon from '../assets/icons/appAction/dropMac.vue';
import MaximizeMacIcon from '../assets/icons/appAction/maximizeMac.vue';
import MinimizeMacIcon from '../assets/icons/appAction/minimizeMac.vue';

const { ipcRenderer } = require('electron');

export default {
  components: {
    CloseMac: CloseMacIcon,
    DropMac: DropMacIcon,
    MaximizeMac: MaximizeMacIcon,
    MinimizeMac: MinimizeMacIcon,
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
    <nav class="w-screen flex">
        <section class="macBtns grid place-items-center">
          <div id="closeWin" class="macBtn grid h-full cursor-pointer place-items-center" @click="closeWindow">
              <div class="show">
                <CloseMac/>
              </div>
          </div>

          <div id="DropWin" class="macBtn grid h-full cursor-pointer place-items-center" @click="minimizeWindow">
            <div class="show">
              <DropMac/>
            </div>
          </div>

          <div id="SizeWin" class="macBtn grid h-full cursor-pointer place-items-center" @click="toggleFullscreen">
            <div class="show" v-if="isMaximized">
              <MinimizeMac/>
            </div>

            <div class="show" v-else>
                <MaximizeMac/>
            </div>
          </div>
        </section>
        
        <div id="drag" class="h-full grow"></div>
    </nav>
</template>

<style scoped>
    nav {
        height: 30px;
        background-color: #1E1F22;
        z-index: 0;
    }

    #drag {
        -webkit-app-region: drag;
    }

    .macBtns {
      width: 90px;
      height: 100%;
      grid-template-rows: 100%;
      grid-template-columns: repeat(3, 30px);
      margin-left: 5px;
    }

    .macBtn {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        z-index: 2;
    }

    #closeWin {
      background-color: #F23F42;
    }

    #DropWin {
      background-color: rgb(228, 181, 61);
    }

    #SizeWin {
      background-color: mediumseagreen;
    }

    .show {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: white;
    opacity: 0;
    transition: opacity 0.2s ease;
    display: grid;
    place-items: center;
    }

    .macBtn:hover .show {
      opacity: 1;
    }
</style>