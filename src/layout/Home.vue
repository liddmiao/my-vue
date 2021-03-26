<template>
  <div>
    <menu-list></menu-list>
  </div>
</template>

<script>
  import MenuList from './components/MenuList'
  export default {
    components: {
      MenuList
    },
    created() {
      this.$http.get('/test').then(res =>{
        console.log(res)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>