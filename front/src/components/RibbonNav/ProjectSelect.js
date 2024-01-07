import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    data() {
    return {
      selectedProject: null,
      Projects: [
        { key: 1, name: 'Project one', icon: 'tabler:folder' },
        { key: 2, name: 'Project two', icon: 'tabler:folder' },
        { key: 3, name: 'Project two', icon: 'tabler:folder' },
      ],
      RibbonButtons: [
        { name: 'Clipboard', icon: 'tabler:clipboard-text' },
        { name: 'Graph', icon: 'tabler:sitemap' },
        { name: 'Search', icon: 'tabler:search' },
        { name: 'Settings', icon: 'tabler:settings' },
      ]
    };
  },
  methods: {
    selectProject(index) {
      this.selectedProject = index;
    },
    handleProjectRightClick({ x, y, index }) {
      // Call the 'openIt' function in App.vue with mouse coordinates and selected project index
      this.$emit('open-it', { x, y, index });
    },
  },
}