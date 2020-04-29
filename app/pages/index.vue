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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
