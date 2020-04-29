<template>
  <div :class="$style['page-container']">
    <Header />

    <main :class="$style['main']">
      <Nuxt />
    </main>

    <Footer />
  </div>
</template>
<script>
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" module>
.page-container {
  position: relative;

  .main {
    position: relative;
    @include container();
  }
}
</style>
