<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
#app{
  min-width: 1280px;/*no*/
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
