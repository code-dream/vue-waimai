<template>
  <div class="main">
    <header-title :title="address.name" style="position: fixed;z-index: 2; width: 100%">
      <div class="leftTitle" slot="topLeft">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="rightTitle" slot="topRight">
        <i v-if="!!userInf._id" class="iconfont icon-yonghu"></i>
        <span v-if="!userInf._id">登录/注册</span>
      </div>
    </header-title>
    <div class="list">
       <div class="content">
          <msite-swiper></msite-swiper>
          <shop-list></shop-list>
       </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import HeaderTitle from '../../components/Header/Header.vue'
import MsiteSwiper from '../../components/MsiteSwiper/MsiteSwiper.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import Bscroll from 'better-scroll'
export default {
  name: "index",
  mounted() {
    this.$nextTick(() => {
      new Bscroll('.list', {
        click: true,
        bounce: false,
        swiperTime: 1500
      })
    })
  },
  components: {
    HeaderTitle,
    MsiteSwiper,
    ShopList
  },
  computed: {
    ...mapState(['address', 'userInf'])
  }
}
</script>
<style lang='stylus'>
.main
  width: 100%
  height: 100%
  .list
    overflow: hidden
    height: 100%
    .content
      padding-bottom: 70px
  .iconfont
    vertical-align: top
    font-size: 36px
</style>
