<template>
 <div class="container">
  <div class="cart">
    <div class="caricon" @click="isClick = !isClick">
      <div class="quan">
       <i class="iconfont icon-ziyuan"></i>
       <div class="count">{{totalCount}}</div>
      </div>
    </div>
    <div class="buy">
      去付款
    </div>
    <div class="foodInf" @click="isClick = !isClick">
      <div :class="{isExist: !isExist}">{{isExist?`未选购商品`: `￥${this.totalPrice}`}}</div>
      <div>配送费￥4元</div>
    </div>
  </div>
  <transition name="cartFade">
    <div class="cart-cover" v-if="isClick" @click="isClick=!isClick"></div>
  </transition>
  <transition name="slide">
    <div class="cartSlide"  v-if="isClick">
      <div class="slideHead">
        <div>购物车</div>
        <div>
          <a href="javascripe:" @click="clearAll">清空</a>
        </div>
      </div>
      <ul class="select" v-if="!isExist">
        <li v-for="(item, index) in cartFood" :key="index">
          <div>
            {{item.name}}
          </div>
          <div>
            <span class="cartPrice">￥{{item.price}}</span>
            <div class="cartControl">
              <CartControl :food='item' :size='true' @updateCart="handle"/>
            </div>
          </div>
        </li>
      </ul>
      <div class="kong" v-if="isExist">
        购物车为空
      </div>
    </div>
  </transition>
 </div>
</template>
<script>
import CartControl from '../cartControl/cartControl.vue'
export default {
  props: ['cartFood'],
  components: {
    CartControl
  },
  data() {
    return {
      isClick: false
    }
  },
  computed: {
    totalCount() {
      return this.cartFood.reduce((pre, item) => pre + item.count, 0)
    },
    totalPrice() {
      return this.cartFood.reduce((pre, item) => pre + item.count * item.price, 0)
    },
    isExist() {
      return this.cartFood.length ===0
    }
  },
  methods: {
    handle({isAdd, food}) {
      this.$emit('updateCart', {isAdd, food})
    },
    clearAll() {
      this.cartFood.forEach((item) => {
        item.count = 0
      })
      this.cartFood = []
    }
  }
}
</script>
<style scoped>
.cart{
  position: relative;
  z-index: 1;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #33313b;
}
.caricon{
  position: absolute;
  margin: -25px 0 0 6%;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 50%;
  background-color: #33313b;
}
.caricon i{
  font-size: 28px;
  color: #fff;
}
.caricon .quan{
  display: inline-block;
  width: 64px;
  height: 64px;
  line-height: 64px;
  border-radius: 32px;
  vertical-align: -4px;
  background-color: #23a393;
}
.caricon .quan .count{
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
  border-radius: 15px;
  background-color: red;
}
.buy{
  float: right;
  width: 30%;
  height: 100%;
  line-height: 60px;
  text-align: center;
  background-color: #23a393;
}
.foodInf{
  margin: 0 30% 0 26%;
  line-height: 26px;
}
.isExist{
  font-size: 24px;
}
.noGoods{
  font-size: 16px;
}
.foodInf div:nth-child(2){
  font-size: 16px;
  color: gray;
}
.cart-cover{
  position: fixed;
  top: 0;bottom: 0;left: 0;right: 0;
  background: rgba(65,65,65,.64);
}
.cartFade-enter-active,.cartFade-leave-active{
  transition: opacity .2s ease;
}
.cartFade-enter,.cartFade-leave-to{
  opacity: 0;
}
.cartSlide{
  position:absolute;
  z-index: 0;
  bottom: 60px;
  width: 100%;
  background-color: #fff;
}
.slideHead{
  display: flex;
  width: 100%;
  padding: 0 18px;
  box-sizing: border-box;
  justify-content: space-between;
  line-height: 44px;
  background-color: #d6d6dc;
}
.slideHead div:first-child{
  font-size: 20px;
}
.select{
  max-height: 300px;
  padding: 0 18px;
  overflow: auto;
}
.select li{
  display: flex;
  justify-content: space-between;
  line-height: 48px;
}
.select li + li{
  border-top: 1px solid #e9e5e5;
}
.select li .cartPrice{
  color: red;
  font-weight: bold;
}
.select .cartControl{
  display: inline-block;
  line-height: 24px;
  margin-left: 10px;
}
.kong{
  line-height: 48px;
  text-align: center;
}
.slide-enter-active,.slide-leave-active{
  transition: transform .2s ease;
}
.slide-enter, .slide-leave-to{
  transform: translateY(100%)
}
</style>
