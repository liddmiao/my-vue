<template>
  <div class="menu-list">
    <el-menu 
      class="el-menu-vertical-demo"
      @open="handleOpen"
    >
      <template
        v-for="(item, idx) in routes">
        <el-submenu
          v-if="item.children && item.children.length > 0"
          :key="item.path"
          :index="String(idx)"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child, cidx) in item.children"
              :key="child.path"
              :index="`${idx}-${cidx}`"
            >
              {{child.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          v-else
          :key="item.path"
          :index="String(idx)"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: []
      }
    },
    created() {
      this.$http.get('/getRoutes').then(res =>{
        this.routes = res
      })
    },
    methods: {
      handleOpen(key, path) {
        console.log(key, path)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>