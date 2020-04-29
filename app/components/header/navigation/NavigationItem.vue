<template>
  <li :class="$style['nav-list__item']">
    <i v-if="withIcon" :class="$style[itemIconClass(item.key)]"></i>

    <a :href="item.url" v-text="item.text"></a>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: [Object],
      default: () => {}
    },
    withIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    itemIconClass(key) {
      return `ic-${key}`
    }
  }
}
</script>
<style lang="scss" module>
.nav-list__item {
  position: relative;
  margin: 0 10px;

  i {
    padding: 6px 8px;
    margin-right: 5px;
    font-size: 14px;

    &.ic-phone {
      &:before {
        content: fa-content($fa-var-phone);
      }
    }

    &.ic-chat {
      &:before {
        content: fa-content($fa-var-comment-alt);
      }
    }

    &.ic-member {
      border-radius: 50%;
      background-color: $black-90;

      &:before {
        content: fa-content($fa-var-user);
        color: $white;
      }
    }
  }

  a {
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: $black-90;
  }
}
</style>
