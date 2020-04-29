<template>
  <div :class="$style['container']">
    <TopBanner />
  </div>
</template>
<script>
import TopBanner from '~/components/banner/TopBanner'

export default {
  components: {
    TopBanner
  },
  transition: {
    mode: 'out-in'
  }
}
</script>
<style lang="scss" module>
.container {
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
