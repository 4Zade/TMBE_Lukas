export default {
    data() {
      return {
        isResizing: false,
        initialMouseX: 0,
        initialWidth: 240,
        minWidth: 150,
        hideWidth: 40,
        maxWidthPercentage: 30,
        width: 240,

        isNavHidden: true,
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
      toggleNav() {
        this.isNavHidden = !this.isNavHidden;
        this.$refs.nav.style.display = this.isNavHidden ? "none" : "block";
      },
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
        if (this.isResizing) {
          const rightDistance = window.innerWidth - event.clientX;
  
          if (rightDistance < this.hideWidth) {
            this.$refs.nav.style.display = "none";
            this.isNavHidden = true;  // Assuming you want to track the hidden state
          } else {
            this.$refs.nav.style.display = "block";
            this.isNavHidden = false;  // Assuming you want to track the hidden state
          }
        }
      },
    },
  };