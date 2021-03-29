<template>
  <div class="my-vue-home">
    <el-row :gutter="20">
      <el-col :span="4">
        <menu-list></menu-list>
      </el-col>
      <el-col :span="20">
        <page-view></page-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MenuList from './components/MenuList'
  import PageView from './components/PageView'
  export default {
    components: {
      MenuList,
      PageView
    }
  }
</script>

<style lang="scss" scoped>
  .my-vue-home{
    .el-row {
      margin: 0 !important;
    }
  }
</style>