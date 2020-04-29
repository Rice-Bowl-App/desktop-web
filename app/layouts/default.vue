<template>
  <div :class="$style['page-container']">
    <Header />

    <main :class="$style['main']">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import Header from '~/components/header/Header'

export default {
  components: {
    Header
  }
}
</script>
<style lang="scss" module>
.page-container {
  max-width: 1120px;
  margin: 0 auto;

  .main {
    position: relative;
  }
}
</style>
