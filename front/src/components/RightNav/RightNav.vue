<template>
    <nav ref="nav" id="right-nav-container" class="h-screen relative" :style="resizableDivStyle" @mousemove="checkHideNav">
        <hr 
            id="right-nav-hr"
            class="h-full w-2 absolute top-0 left-0 flex flex-col justify-center border-none cursor-col-resize"
            @mousedown="startResize"
        >
    </nav>
</template>

<script src="./ResizeRightNav"></script>