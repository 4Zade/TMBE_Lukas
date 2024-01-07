<template>
    <nav ref="nav" id="file-container" class="h-screen relative" :style="resizableDivStyle" @mousemove="checkHideNav">
        <hr 
            id="left-nav-hr"
            class="h-full w-2 absolute top-0 right-0 flex flex-col justify-center border-none cursor-col-resize"
            @mousedown="startResize"
        >
        <section class="px-4 pt-4 h-screen">
          <div class="w-full h-auto bg-gray-800">



          </div>

        </section>
    </nav>










    
    <div id="file-explorer-btn" class="h-screen flex flex-col justify-center" @click="toggleNav">
      <svg id="file-explorer-collapse-btn" v-if="isNavHidden" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-compact-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11 4l3 8l-3 8" />
      </svg>

      <svg id="file-explorer-collapse-btn" v-else xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-compact-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 20l-3 -8l3 -8" />
      </svg>
    </div>
</template>

<script src="./ResizeLeftNav"></script>