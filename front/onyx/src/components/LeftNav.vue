<script>
import SettingsIconVue from '../assets/icons/leftNav/settingsIcon.vue';
import SearchIconVue from '../assets/icons/leftNav/searchIcon.vue';
import GraphViewIconVue from '../assets/icons/leftNav/graphViewIcon.vue';
import ClipboardIconVue from '../assets/icons/leftNav/clipboardIcon.vue';

import FolderIconVue from '../assets/icons/leftNav/folderIcon.vue';

export default {
    components: {
        SettingsIcon: SettingsIconVue,
        SearchIcon: SearchIconVue,
        GraphViewIcon: GraphViewIconVue,
        ClipboardIcon: ClipboardIconVue,
        Project: FolderIconVue,
    }
}
</script>

<template>
    <nav class="h-screen flex flex-col justify-between">
        <div class="grid grids place-items-center project-grid">
            <Project/>
        </div>

        <div class="grid grids place-items-center">
            <ClipboardIcon/>
            <GraphViewIcon/>
            <SearchIcon/>
            <SettingsIcon/>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        width: 40px;
        background-color: #1E1F22;
        margin-top: -30px;
        z-index: 5;
    }

    .grids {
        grid-auto-rows: 40px;
        grid-template-columns: 100%;
        color: #8E8E8E;

        z-index: 6;
    }

    nav:before {
            content: "";
            width: 40px;
            height: 40px;
            position: absolute;
            top: 30px;
            left: 38px;
            border-bottom-right-radius: 50%;
            box-shadow: 20px 0 0 0;
            color: #1E1F22;
            transform: rotate(180deg);
            z-index: 1;
        }

    .project-grid {
        margin-top: 30px;
    }
</style>