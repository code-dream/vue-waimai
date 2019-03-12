<template>
 <div class="container">
    <div class="cart" @click="isClick = !isClick">
    <div class="caricon">
      <div class="quan">
       <i class="iconfont icon-ziyuan"></i>
      </div>
    </div>
    <div class="buy">
      去付款
    </div>
    <div class="foodInf">
      <div>￥4</div>
      <div>配送费￥4元</div>
    </div>
  </div>
  <transition name="slide">
    <div class="select" v-if="isClick">
      hello
    </div>
  </transition>
 </div>
</template>
<script>
export default {
  data() {
    return {
      isClick: false
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
.foodInf div:first-child{
  font-size: 24px;
}
.foodInf div:nth-child(2){
  font-size: 16px;
  color: gray;
}
.select{
  position:absolute;
  z-index: 0;
  bottom: 60px;
  width: 100%;
  height: 100px;
  background-color: #c3c2c3;
}
.slide-enter-active,.slide-leave-active{
  transition: transform .2s ease;
}
.slide-enter, .slide-leave-to{
  transform: translateY(100px)
}
</style>
