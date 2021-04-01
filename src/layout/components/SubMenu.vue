<template>
  <div class="sub-menu">
    <template v-if="routeChildren && routeChildren.length > 0">
      <div v-for="child in routeChildren"
           class="menu-item"
           :key="child.name">
        <i :class="`el-icon-${child.meta.icon}`"></i>
        <p>{{child.meta.title}}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    routeChildren: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showSubList: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>