<template>
  <div class="ShopHead">
    <div class="nav" :style='{backgroundImage: `url(${shopInfo.bgImg})`}'>
      <i class="iconfont icon-xiaoyuhao" @click='$router.push("/Msite")'></i>
    </div>
    <div class="myTitle">
      <div class="shopImg">
        <img :src="shopInfo.avatar" alt="">
      </div>
      <div class="content">
        <div class="fLine">
          <span class='pingpai'>品牌</span>
          <span class='name'>{{shopInfo.name}}</span>
          <i class="iconfont icon-right-s"></i>
        </div>
        <div class='sLine'>
          <span>{{shopInfo.score}}</span>
          <span>月售{{shopInfo.sellCount}}份</span>
          <span>{{shopInfo.description}}</span>
          <span>约{{shopInfo.deliveryTime}}分钟</span>
          <span>距离{{shopInfo.distance}}</span>
        </div>
        <div class="tLine">
          新用户下单立减17元（不与其他优惠活动同时生效）
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    shopInfo() {
      return this.$store.state.shopInfo
    }
  },
  mounted() {
    this.$store.dispatch("reqShopInf")
  },
}
</script>
<style lang='stylus'>
  .ShopHead
    .nav
      height: 55px
      line-height: 55px
      .iconfont
        color: #ffffff
        font-size: 30px  
        vertical-align: top
    .myTitle
      position: relative
      text-align: center
      .shopImg
        display: inline-block
        position: absolute 
        width: 64px
        height: 64px
        margin: -40px 0 0 -32px
        img
          width: 64px
          height: 64px
          box-shadow: 0px -1px 6px
      .content
        height: 95px
        padding-top: 20px
        .fLine
          height: 45px
          line-height: 45px
          .pingpai
            line-height: 20px
            font-size: 18px
            padding: 0 5px 
            background-color yellow
            margin-right: 10px
          .name
            font-size: 22px
            font-weight: bold
        .sLine
          line-height: 25px
          span 
            margin-right: 10px
        .tLine
          line-height: 25px
</style>
