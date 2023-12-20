<template>
    <main id="context-menu" class="absolute w-auto h-auto rounded-lg z-10 p-2 font-semibold select-none">
      <section id="project" class="flex flex-col gap-y-0.5">

        <div v-for="item in contextMenuItems" :key="item.id" class="context-btn h-6 rounded-md flex items-center px-2">
          <Icon :icon="item.icon" width="20" height="20" />
          <h6 class="ml-2">{{ item.label }}</h6>
        </div>

        <div class="flex flex-col mt-4 text-sm px-2">
          <h6 class="mb-1">Colors</h6>
          <main class="flex justify-between h-5">
            <section class="flex gap-x-1">
              <div v-for="color in colors" :key="color.clrId" class="rounded-full w-4 h-4 cursor-pointer hover:w-5 hover:h-5" :class="color.class" :id="color.id"></div>
            </section>
            <section class="flex items-center mb-1">
              <h6 class="text-xxs mb-0.5 mr-1">open editor</h6>
              <div id="color-editor" class="rounded-full w-4 h-4 clr-red cursor-pointer bg-colorEditor bg-no-repeat bg-cover"></div>
            </section>
          </main>
        </div>

      </section>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      contextMenuItems: [
        { id: 1, icon: 'tabler:pencil', label: 'Rename' },
        { id: 2, icon: 'tabler:edit', label: 'Change icon' },
        { id: 3, icon: 'tabler:trash', label: 'Delete' },
        { id: 4, icon: 'tabler:maximize', label: 'Open in new window' },
      ],
      colors: [
        { clrId: 1, id: 'set-red', class: 'clr-red' },
        { clrId: 2, id: 'set-yellow', class: 'clr-yellow' },
        { clrId: 3, id: 'set-green', class: 'clr-green' },
        { clrId: 4, id: 'set-blue', class: 'clr-blue' },
        { clrId: 5, id: 'set-purple', class: 'clr-purple' },
      ]
    };
  },
  mounted() {
    // Emit a custom event when the component is mounted
    this.$emit('open-it-mounted');
  },
};
</script>