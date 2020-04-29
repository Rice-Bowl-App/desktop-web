<template>
  <div :class="$style['banner']">
    <div :class="$style['banner__information']">
      <h2 :class="$style['banner__information-title']">
        PHP Hosting
      </h2>

      <h3 :class="$style['banner__information-subtitle']">
        Cepat, handal, penuh dengan module PHP yang Anda butuhkan
      </h3>

      <div :class="$style['banner__information-feature']">
        <ul :class="$style['feature-list']">
          <li :class="$style['feature-list__item']">
            Solusi PHP untuk performa query yang lebih cepat.
          </li>

          <li :class="$style['feature-list__item']">
            Konsumsi memori yang lebih rendah.
          </li>

          <li :class="$style['feature-list__item']">
            Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7
          </li>

          <li :class="$style['feature-list__item']">
            Fitur enkripsi IonCube dan Zend Guard Loaders
          </li>
        </ul>
      </div>
    </div>

    <div :class="$style['banner__image']">
      <BannerImage />
    </div>
  </div>
</template>
<script>
import BannerImage from '~/assets/images/homepage/illustration_banner_php_hosting_01.svg?inline'

export default {
  components: {
    BannerImage
  }
}
</script>
<style lang="scss" module>
.banner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__information {
    text-align: left;
    color: $black-70;

    &-title {
      font-size: 34px;
      margin: 0;
    }

    &-subtitle {
      font-size: 30px;
      font-weight: 300;
      margin: 10px 0 0;
    }

    &-feature {
      .feature-list {
        padding: 0;
        list-style: none;
        margin: 20px 0 0;

        &__item {
          padding: 5px 0;
          font-weight: 300;
          display: flex;
          position: relative;

          @include checkList();
        }
      }
    }
  }

  &__image {
    width: 100%;

    svg {
      max-width: 560px;
      min-width: 560px;
    }
  }
}
</style>
