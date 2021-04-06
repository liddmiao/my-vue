<template>
  <div class="menu-list">
    <template v-for="item in routeList">
      <div class="menu-item"
           :key="item.name"
           @click="toRoute(item.name)">
        <i :class="`el-icon-${item.meta.icon}`"></i>
        <p>{{item.meta.title}}</p>
        <sub-menu v-if="item.children && item.children.length > 0"
                :routeChildren="item.children"></sub-menu>
      </div>
    </template>
  </div>
</template>

<script>
import initRoutes from '@/router/calcAsyncRoutes.js'
import SubMenu from './SubMenu'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    SubMenu
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['routeList'])
  },
  created () {
    this.$http.get('/getRoutes').then(res => {
      const routelist = initRoutes(res)
      this.$router.addRoutes(routelist)
      this['routes/setRoute'](routelist)
    })
  },
  methods: {
    ...mapMutations(['routes/setRoute']),
    toRoute(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
  height: auto;
  .menu-item {
    height: auto;
    padding: 10px 0;
    background: #343848;
    color: #c1cadc;
    position: relative;
    &.active {
      color: #fff;
      background: #5582f3;
    }
    i {
      font-size: 22px;
    }
    span {
      font-size: 13px;
    }
  }
}
</style>