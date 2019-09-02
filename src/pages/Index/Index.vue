<template>
  <div class="root">
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'

  export default {
    name: "Index",
    components: {
      Header: Header,
      Footer: Footer,
    },
  }
</script>

<style scoped>
  div.root{
    /*min-width: 1000px;!*no*!*/
    /*overflow-x: scroll;*/
  }
</style>
