<template>
  <header :class="$style['page-header']">
    <TopMenu />

    <BottomMenu />
  </header>
</template>
<script>
import TopMenu from './top-menu/TopMenu'
import BottomMenu from './bottom-menu/BottomMenu'

export default {
  components: {
    TopMenu,
    BottomMenu
  }
}
</script>
<style lang="scss" module>
.page-header {
  width: 100%;
  height: auto;
  @include container();
}
</style>
