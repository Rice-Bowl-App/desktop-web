<template>
  <header :class="$style['page-header']">
    <TopMenu />
  </header>
</template>
<script>
import TopMenu from './top-menu/TopMenu'

export default {
  components: {
    TopMenu
  }
}
</script>
<style lang="scss" module>
.page-header {
  width: 100%;
  height: 80px;
  // position: relative;
}
</style>
