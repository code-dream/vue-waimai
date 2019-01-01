<template>
  <div class="shopList">
    <p class="tip">
      <span class="sangang"></span>
      <span>附近商家</span>
    </p>
    <ul v-if="shopInf.length">
      <li class="shop" v-for="(shop, index) in shopInf" :key="index">
        <div class="shopPic"></div>
        <div class="shopDetail">
          <div class="shopName">
            <div class="name">
              <span class="pp">品牌</span>
              <span>{{shop.name}}</span>
            </div>
            <ul class='shopNameR'>
              <li class='shop-support' v-for="(item, index) in shop.supports" :key="index">
                {{item.icon_name}}
              </li>
            </ul>
          </div>
          <div class="xiaoliang">
            <Star :score="shop.rating" :size="24"></Star>
            <span style='color: #ff5f5f'>{{shop.rating}}</span> 
            <span>月售{{shop.recent_order_num}}单</span>
            <div class="starR">{{shop.delivery_mode.text}}</div>
          </div>
          <div class="qisong">￥{{shop.float_minimum_order_amount}}起送/配送费￥{{shop.float_delivery_fee}}</div>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item, index) in 10" :key="index">
        <img src="./image/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>
<script>
import Star from '../Star/Star.vue'
export default {
  computed: {
    shopInf () {
      return this.$store.state.shopInf
    }
  },
  components: {
    Star
  }
}
</script>
<style lang='stylus'>
.shopList
  margin-bottom: 70px
  .tip
    height: 40px
    line-height: 40px
    color: #63686e
    background-color: #fff
    border-top: 1px solid #e4e4e4
    .sangang
      display: inline-block
      width: 15px
      height: 3px
      border-top: 7px double
      border-bottom: 2px solid
      vertical-align: middle
      margin: 0 5px 0 10px
  .shop
    height: 95px
    padding: 10px
    border-bottom: 1px solid #63686e
    .shopPic
      float: left
      width: 80px
      height: 100%
      background: url('./image/waimai.jpg') no-repeat center center
      background-size: cover
    .shopDetail
      height: 100%
      margin-left: 90px
      .shopName
        height: 30px
        line-height: 30px
        font-size: 17px
        font-weight: bold
        .name
          display: inline-block
          width: 76%
          overflow: hidden
          text-overflow: ellipsis 
          white-space: nowrap
          .pp
            background-color: #facd49
            margin-right: 5px
        .shopNameR
          float: right
          width: 24%
          text-align: right
          .shop-support
            display: inline-block
            border: 1px solid #919190
            color: #919190
            font-size: 12px
            line-height: 16px
            padding: 2px 4px
      .xiaoliang
        height: 39px
        line-height: 39px
        font-size: 15px
        span
          margin-right: 5px
        .starR
          float: right
          color: #40a798
      .qisong
        height: 26px
        line-height: 26px
        font-size: 16px
</style>
