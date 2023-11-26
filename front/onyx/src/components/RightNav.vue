<script>
export default {
  data() {
    return {
      isResizing: false,
      initialMouseX: 0,
      initialWidth: 240,
      minWidth: 160,
      hideWidth: 60,
      maxWidthPercentage: 30,
      width: 240,
    };
  },
  computed: {
    resizableDivStyle() {
      return {
        width: `${this.width}px`,
      };
    },
  },
  methods: {
    startResize(event) {
      event.preventDefault();
      this.isResizing = true;
      this.initialMouseX = event.clientX;
      this.initialWidth = this.width;

      window.addEventListener("mousemove", this.resize);
      window.addEventListener("mouseup", this.stopResize);
    },
    resize(event) {
      if (this.isResizing) {
        const dx = event.clientX - this.initialMouseX;
        const newWidth = this.initialWidth - dx;

        const maxWidth = (window.innerWidth * this.maxWidthPercentage) / 100;

        if (newWidth >= this.minWidth && newWidth <= maxWidth) {
          this.width = newWidth;
        } else if (newWidth < this.minWidth) {
          this.width = this.minWidth;
        }
      }
    },
    stopResize() {
      this.isResizing = false;
      window.removeEventListener("mousemove", this.resize);
      window.removeEventListener("mouseup", this.stopResize);
    },
    checkHideNav(event) {
      if (this.isResizing && event.clientX < this.hideWidth) {
        this.$refs.nav.style.display = "none";
      } else {
        this.$refs.nav.style.display = "block";
      }
    },
  },
};
</script>

<template>
    <nav ref="nav" id="right-nav-container" class="h-screen relative" :style="resizableDivStyle" @mousemove="checkHideNav">
        <hr 
            id="right-nav-hr"
            class="h-full w-2 absolute top-0 left-0 flex flex-col justify-center border-none cursor-col-resize"
            @mousedown="startResize"
        >
    </nav>
</template>