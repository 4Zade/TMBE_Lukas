<template>
  <TopNav/>
  <div class="flex">
    <LeftNav/>
    <FileExplorer/>
    <ContentGrid/>
  </div>
</template>

<script>
import TopNavVue from './components/TopNav.vue';
import LeftNavVue from './components/LeftNav.vue';
import FileExplorerVue from './components/FileExplorer.vue';
import ContentGridVue from './components/ContentGrid.vue';

export default {
  name: 'App',
  components: {
    TopNav: TopNavVue,
    LeftNav: LeftNavVue,
    FileExplorer: FileExplorerVue,
    ContentGrid: ContentGridVue,
  }
}
</script>