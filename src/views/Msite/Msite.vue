<template>
  <div class="main">
    <header-title :title="address.name">
      <div class="leftTitle" slot="topLeft">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="rightTitle" slot="topRight">
        <span>登录注册</span>
      </div>
    </header-title>
    <msite-swiper></msite-swiper>
    <shop-list></shop-list>
  </div>
</template>
<script>
import HeaderTitle from '../../components/Header/Header.vue'
import MsiteSwiper from '../../components/MsiteSwiper/MsiteSwiper.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  components: {
    HeaderTitle,
    MsiteSwiper,
    ShopList
  },
  computed: {
    address () {
      return this.$store.state.address
    }
  }
}
</script>
<style lang='stylus'>
.main
  overflow: hidden
</style>
