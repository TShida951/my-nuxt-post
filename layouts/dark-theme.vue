<template>
  <div class="dark">
    <nuxt />
  </div>
</template>

<style lang="scss">
.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  padding: 10px;
  background: black;
  color: white;

  a {
    color: white;
  }

  .navbar {
    background: black;
    color: white;
  }
}
</style>
