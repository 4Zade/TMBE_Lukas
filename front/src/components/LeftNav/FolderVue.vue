<template>
    <div>
      <div @click="handleFolderClick">
        {{ folderName }}
      </div>
      <select v-if="isOpen" @change="handleFileSelect">
        <option v-for="file in folderFiles" :key="file">{{ file }}</option>
      </select>
    </div>
</template>

<script>
const fs = require('fs');

export default {
  props: {
    folderName: String,
  },
  data() {
    return {
      isOpen: false,
      folderFiles: [],
    };
  },
  methods: {
    loadFilesInFolder() {
      const folderPath = `/path/to/main/folder/${this.folderName}`;
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
        this.folderFiles = files;
      });
    },
    handleFolderClick() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.loadFilesInFolder();
      }
    },
    handleFileSelect(event) {
      const selectedFile = event.target.value;
      // Handle the selected file (you can emit an event or perform other actions)
      console.log('Selected File:', selectedFile);
    },
  },
};
</script>