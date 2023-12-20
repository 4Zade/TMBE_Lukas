<template>
  <TitleBarWin />
  <div class="flex">
    <RibbonNav class="LeftNav" @open-it="openIt"/>
    <FileExplorer/>
    <ContentGrid/>
    <RightNav/>
  </div>

  <ContextMenus ref="openItRef" v-if="isOpenItVisible" :style="{ top: openItPosition.y + 'px', left: openItPosition.x + 'px' }"/>
</template>

<script>
import TitleBarWinVue from './components/TitleBar/TitleBarWin.vue';

import RibbonNavVue from './components/RibbonNav/RibbonNav.vue';

import FileExplorerVue from './components/LeftNav/FileExplorer.vue';
import RightNavVue from './components/RightNav/RightNav.vue';

import ContentGridVue from './components/ContentGrid.vue';

import ContextMenusVue from './components/ContextMenus/ContextMenus.vue';

export default {
  name: 'App',
  components: {
    TitleBarWin: TitleBarWinVue,

    RibbonNav: RibbonNavVue,

    FileExplorer: FileExplorerVue,
    RightNav: RightNavVue,

    ContentGrid: ContentGridVue,

    ContextMenus: ContextMenusVue,
  },
  data() {
    return {
        isOpenItVisible: false,
        openItPosition: { x: 0, y: 0 },

        hasProjectContextMenu: false,
    };
  },
  methods: {
    openIt({ x, y }) {
      // Set the visibility of OpenIt component to true
      this.isOpenItVisible = true;

      // Set the position of OpenIt component
      this.openItPosition = { x, y };

      // Add a click event listener to the document
      document.addEventListener('click', this.handleDocumentClick);
    },
    handleDocumentClick(event) {
      // Check if the OpenIt component is mounted and $refs.openItRef is defined
      if (this.$refs.openItRef && this.$refs.openItRef.$el) {
        const openItElement = this.$refs.openItRef.$el;

        // Check if openItElement is a valid DOM element
        if (openItElement instanceof Element) {
          // Check if the clicked element is not part of the OpenIt component
          if (!openItElement.contains(event.target)) {
            this.closeOpenIt();
          }
        }
      }
    },
    closeOpenIt() {
      this.isOpenItVisible = false;
      document.removeEventListener('click', this.handleDocumentClick);
    },
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