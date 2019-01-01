<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer.vue'
export default {
  components: {
    Footer
  },
  mounted () {
    // 请求Msite页面所需的三种数据并加入到vuex中管理
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getSwiperInf')
    this.$store.dispatch('getShopInf')
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import 'http://at.alicdn.com/t/font_964158_kyxdr5sj0qo.css';
body,html{
  height: 100%;
}
</style>
