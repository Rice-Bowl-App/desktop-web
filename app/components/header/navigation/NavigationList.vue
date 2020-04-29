<template>
  <div :class="$style['nav-wrapper']">
    <ul :class="$style['nav-list']">
      <NavigationItem
        v-for="(item, id) in lists"
        :key="id"
        :item="item"
        :with-icon="withIcon"
      />
    </ul>
  </div>
</template>
<script>
import NavigationItem from './NavigationItem'

export default {
  components: {
    NavigationItem
  },
  props: {
    lists: {
      type: [Array],
      default: () => []
    },
    withIcon: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss" module>
.nav-wrapper {
  display: inline-block;

  .nav-list {
    position: relative;
    list-style: none;
    display: flex;
    float: right;
  }
}
</style>
