<template>
  <div>
      <headerTitle :title="'订单'"></headerTitle>
      <div class="orderContent">
        <img src="./image/person.png" alt="" width="90%"><br>
        <span>登录后查看外卖订单</span><br>
        <button>立即登录</button>
      </div>
  </div>
</template>
<script>
import headerTitle from '../../components/Header/Header.vue'
export default {
  components: {
    headerTitle
  }
}
</script>
<style lang='stylus'>
.orderContent
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  width: 300px
  height: 400px
  margin: auto auto
  text-align: center
  span
    font-size: 22px
    line-height: 40px
    color: #bcbab8
  button
    width: 50% 
    height: 50px
    line-height: 50px
    font-size: 20px
    color: #fff
    background-color: #57a99a
    border: 1px solid #57a99a
    border-radius: 4px
</style>
