<script>
export default {
  data() {
    return {
      isResizing: false,
      initialMouseX: 0,
      initialWidth: 240, // Initial width of the nav
      minWidth: 150, // Minimum width
      hideWidth: 60, // Width at which the nav gets hidden
      maxWidthPercentage: 80, // Maximum width as a percentage of the screen
      width: 240, // Current width
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
        const newWidth = this.initialWidth + dx;

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
    <nav ref="nav" class="h-screen rounded-tr-2xl relative" :style="resizableDivStyle" @mousemove="checkHideNav">
        <hr 
            class="h-full w-2 absolute top-0 right-0 flex flex-col justify-center border-none cursor-col-resize"
            @mousedown="startResize"
        >
    </nav>
</template>

<style scoped>
    nav {
        width: 320px;
        background-color: #2B2D31;
    }

    hr::before {
    content: '';
    display: block;
    position: absolute;
    top: 25%;
    right: 20%;
    height: 50%;
    width: 60%;
    background-color: transparent;
    border-radius: 8px;

    transition: 0.3s;
  }

  hr:hover::before {
    background-color: #9A85C7;
  }
</style>