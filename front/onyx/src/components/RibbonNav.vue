<script>
import SettingsIconVue from '../assets/icons/RibbonButtons/SettingsBtn.vue';
import SearchIconVue from '../assets/icons/RibbonButtons/SearchBtn.vue';
import GraphViewIconVue from '../assets/icons/RibbonButtons/GraphViewBtn.vue';
import ClipboardIconVue from '../assets/icons/RibbonButtons/ClipboardBtn.vue';

import FolderIconVue from '../assets/icons/RibbonButtons/ProjectBtn.vue';

export default {
    components: {
        SettingsIcon: SettingsIconVue,
        SearchIcon: SearchIconVue,
        GraphViewIcon: GraphViewIconVue,
        ClipboardIcon: ClipboardIconVue,
        Project: FolderIconVue,
    },
    data() {
    return {
      selectedProject: null,
      projects: [
        { name: 'Project 1', color: 'normal' },
        { name: 'Project 2', color: 'normal' },
        { name: 'Project 3', color: 'normal' },
      ],
    };
  },
  methods: {
    selectProject(index) {
      this.selectedProject = index;
    },
  },
}
</script>

<template>
    <nav class="ribbon-container h-screen flex flex-col justify-between z-40">
        <div class="grid place-items-center project-grid z-50">
            <Project
                v-for="(project, index) in projects"
                :key="index"
                :index="index"
                :selected="selectedProject === index"
                @click="selectProject(index)"
            >
                {{ project.name }}
            </Project>
        </div>

        <div class="grid settings-grid place-items-center">
            <ClipboardIcon/>
            <GraphViewIcon/>
            <SearchIcon/>
            <SettingsIcon/>
        </div>
    </nav>
</template>

<style scoped>
    .purple-background {
        background-color: purple;
        color: white; /* You can adjust the text color for better visibility */
    }
</style>