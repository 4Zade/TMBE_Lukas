<template>
  <TitleBarMac v-if="isMacOS"/>
  <TitleBarWin v-else/>
  <div class="flex">
    <RibbonNav class="LeftNav"/>
    <FileExplorer/>
    <ContentGrid/>
    <RightNav/>
  </div>
</template>

<script>
import TitleBarWinVue from './components/TitleBarWin.vue';
import TitleBarMacVue from './components/TitleBarMac.vue';

import RibbonNavVue from './components/RibbonNav.vue';

import FileExplorerVue from './components/FileExplorer.vue';
import RightNavVue from './components/RightNav.vue';

import ContentGridVue from './components/ContentGrid.vue';

export default {
  name: 'App',
  components: {
    TitleBarWin: TitleBarWinVue,
    TitleBarMac: TitleBarMacVue,

    RibbonNav: RibbonNavVue,

    FileExplorer: FileExplorerVue,
    RightNav: RightNavVue,

    ContentGrid: ContentGridVue,
  },
  data() {
    return {
        isMacOS: process.platform === 'darwin', // Checks if MacOS
    };
  },
}
</script>

<style scoped>
  .TitleBarMac {
    z-index: 5;
  }

  .LeftNav {
    z-index: 1;
  }
</style>