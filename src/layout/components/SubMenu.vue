<template>
  <div class="sub-menu">
    <template v-if="routeChildren && routeChildren.length > 0">
      <div v-for="child in routeChildren"
           class="menu-item"
           :key="child.name"
           @click.stop="toRoute(child.name)">
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
  methods: {
    toRoute(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-menu {
  position: absolute;
  left: 100%;
  top: 0;
  .menu-item {
    height: auto;
    padding: 10px 0;
    background: #343848;
    color: #c1cadc;
  }
}
</style>