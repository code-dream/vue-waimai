<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/iconfont/iconfont.css';
body,html{
  height: 100%;
}
</style>
