<template>
  <ul :class="$style['top-menu__list']">
    <template v-for="(item, id) in lists">
      <li :key="id" :class="$style['top-menu__list-item']">
        <i :class="$style[itemIconClass(item.key)]"></i>

        <a :href="item.url" v-text="item.text"></a>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  props: {
    lists: {
      type: [Array],
      default: () => []
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
.top-menu__list {
  position: relative;
  list-style: none;
  display: flex;
  float: right;

  &-item {
    position: relative;
    margin: 0 10px;

    i {
      padding: 6px 8px;
      margin-right: 5px;
      font-size: 12px;

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
      font-size: 12px;
      cursor: pointer;
      padding: 5 10px;
      text-decoration: none;
      color: $black-90;
    }
  }
}
</style>
