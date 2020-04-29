<template>
  <div :class="$style['nav']">
    <NavigationList :lists="lists" :with-icon="withIcon" />
  </div>
</template>
<script>
import NavigationList from './NavigationList'

export default {
  components: {
    NavigationList
  },
  props: {
    lists: {
      type: [Array],
      default: () => []
    },
    withIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" module>
.nav {
  height: 100%;
  position: relative;
  float: right;
  display: flex;
  align-items: center;
}
</style>
