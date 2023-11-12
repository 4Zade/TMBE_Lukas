<script>
import CloseWinIcon from '../assets/icons/appAction/closeWin.vue';
import SizeWinIcon from '../assets/icons/appAction/sizeWin.vue';
import DropWinIcon from '../assets/icons/appAction/dropWin.vue';

export default {
  components: {
    CloseWin: CloseWinIcon,
    SizeWin: SizeWinIcon,
    DropWin: DropWinIcon,
  },
}
</script>

<template>
    <nav class="w-screen flex justify-end">
        <div id="drag" class="h-full grow"></div>

        <div id="DropWin" class="winBtn grid h-full cursor-pointer place-items-center">
            <DropWin/>
        </div>

        <div id="SizeWin" class="winBtn grid h-full cursor-pointer place-items-center">
            <SizeWin/>
        </div>

        <div id="closeWin" class="winBtn grid h-full cursor-pointer place-items-center">
            <CloseWin/>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        height: 30px;
        background-color: #1E1F22;
    }

    #drag {
        -webkit-app-region: drag;
    }

    #closeWin:hover {
        background-color: #F23F42;
    }

    .winBtn {
        color: #8E8E8E;
        width: 40px;
    }

    .winBtn:hover {
        background-color: #27282c;
        color: white;
    }
</style>