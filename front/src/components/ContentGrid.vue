<template>
  <main class="h-screen flex grow">
  </main>
</template>

<style scoped>
#devider:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: -1px;
  left: 5px;
  border-bottom-right-radius: 50%;
  box-shadow: 5px 0 0 0;
  color: #1E1F22;
  transform: rotate(180deg);
  z-index: 1;
}

#devider:after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: -1px;
  right: 5px;
  border-bottom-right-radius: 50%;
  box-shadow: 5px 0 0 0;
  color: #1E1F22;
  transform: rotate(180deg) scale(-1, 1);
  z-index: 1;
}

hr {
  transition: 0.3s;
  background-color: transparent;
}

#devider:hover hr {
  background-color: #9A85C7;
}
</style>