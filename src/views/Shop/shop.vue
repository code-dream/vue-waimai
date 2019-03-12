<template>
  <div class="shops">
    <ShopHead/>
    <div class="tab">
      <div class="tabItem">
        <router-link to='/shop/food'>点餐</router-link>
      </div>
      <div class="tabItem">
        <router-link to='/shop/evaluate'>评价</router-link>
      </div>
      <div class="tabItem">
        <router-link to='/shop/info'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ShopHead from '../../components/ShopHead/ShopHead.vue'
export default {
  components: {
    ShopHead
  }
}
</script>
<style lang='stylus'>
.shops
  width: 100%
  height: 100%
  .tab
    display: flex
    border-bottom: 2px solid #8080806e
    .tabItem
      flex: 1
      line-height: 40px
      font-size: 20px
      font-weight: bold
      text-align: center
      a:link
        color: gray 
      a:visited
        color: gray 
      a:hover
        color: green
      a.router-link-active
        display: inline-block
        color: rgb(35,163,147)
        border-bottom: 2px solid
</style>
