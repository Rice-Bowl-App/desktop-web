<template>
  <div :class="$style['bottom-menu']">
    <a :class="$style['logo']" href="/">
      <i></i>
    </a>

    <Navigation :lists="navList" :with-icon="false" />
  </div>
</template>
<script>
import Navigation from '~/components/header/navigation/Navigation'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      navList: [
        {
          key: 'hsoting',
          text: 'Hosting',
          url: '/hosting'
        },
        {
          key: 'domain',
          text: 'Domain',
          url: '/domain'
        },
        {
          key: 'server',
          text: 'Server',
          url: '/server'
        },
        {
          key: 'website',
          text: 'Website',
          url: '/website'
        },
        {
          key: 'afiliasi',
          text: 'Afiliasi',
          url: '/afiliasi'
        },
        {
          key: 'promo',
          text: 'Promo',
          url: '/promo'
        },
        {
          key: 'payment',
          text: 'Pembayaran',
          url: '/poayment'
        },
        {
          key: 'review',
          text: 'Review',
          url: '/review'
        },
        {
          key: 'contact',
          text: 'Kontak',
          url: '/contact'
        },
        {
          key: 'blog',
          text: 'Blog',
          url: '/blog'
        }
      ]
    }
  }
}
</script>
<style lang="scss" module>
.bottom-menu {
  height: 100px;
  padding: 10px 0;

  &:before {
    content: '';
    border-bottom: 1px solid $black-10;
    width: 100%;
    position: absolute;
    top: 160px;
    left: 0;
  }

  .logo {
    float: left;

    i {
      width: 300px;
      height: 70px;
      background: url(~assets/images/logo.png) center no-repeat;
      background-size: cover;
      display: block;
    }
  }
}
</style>
