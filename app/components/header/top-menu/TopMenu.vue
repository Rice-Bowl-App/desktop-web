<template>
  <div :class="$style['top-menu']">
    <div :class="$style['top-menu__wrapper']">
      <div v-if="!isHide" :class="$style['top-menu__info']">
        <i :class="$style['ic-tags']"></i>

        <label>
          Gratis Ebook 9 Cara Cerdas Menggunakan Domain
          <span :class="$style['close-info']" @click="closeInfo">[x]</span>
        </label>
      </div>

      <Navigation :lists="navList" />
    </div>
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
      isHide: false,
      navList: [
        {
          key: 'phone',
          text: '0274-5305505',
          url: 'tel:02745305505'
        },
        {
          key: 'chat',
          text: 'Live Chat',
          url: '/chat'
        },
        {
          key: 'member',
          text: 'Member Area',
          url: '/client'
        }
      ]
    }
  },
  methods: {
    closeInfo() {
      this.isHide = true
    }
  }
}
</script>
<style lang="scss" module>
.top-menu {
  height: 60px;
  padding-bottom: 10px;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 60px;
    border-bottom: 1px solid $black-10;
  }

  &__wrapper {
    height: 100%;
    padding: 0;
  }

  &__info {
    height: 100%;
    display: flex;
    align-items: center;
    float: left;

    .ic-tags {
      width: 40px;
      height: 50px;
      background-color: $blue;
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;

      &:before {
        content: fa-content($fa-var-tags);
        color: $white;
        padding-top: 10px;
      }

      &:after {
        content: '';
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 15px solid $white;
        position: absolute;
        bottom: 0;
      }
    }

    label {
      font-size: 12px;
      margin-left: 50px;

      .close-info {
        cursor: pointer;
      }
    }
  }
}
</style>
