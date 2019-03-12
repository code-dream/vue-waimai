<template>
   <div class="foodCon" @click="$emit('closeTip')">
     <div class="food" @click.stop>
        <div class="picture" :style="{background: `url(${food.image})`, backgroundSize: 'cover'}"></div>
        <div class="sm">
          <span>{{food.name}}</span><br/>
          <span>月售{{food.sellCount}}份 好评率{{food.rating}}%</span>
        </div>
        <div class="price">￥{{food.price}}</div>
        <div class="cartAdd">
          <Cart/>
        </div>
     </div>
   </div>
</template>
<script>
import Cart from '../cartControl/cartControl.vue'
export default {
  props: ['food'],
  components: {
    Cart
  }
}
</script>
<style>
  .foodCon{
    position: absolute;
    z-index: 2;
    top: 0;bottom: 0;left: 0;right: 0;
    background-color: rgba(40,40,40,.8);
  }
  .food{
    position: absolute;
    top: 20%;
    left: 12%;
    width: 76%;
    height: 55%;
    border-radius: 12px;
    background-color: #fff;
  }
  .picture{
    height:75%;
    border-radius: 12px 12px 0 0;
  }
  .sm{
    padding: 15px;
    line-height: 20px;
  }
  .sm span:first-child{
    font-size: 20px;
    font-weight: bold;
  }
  .sm span:nth-child(3){
    font-size: 14px;
    color: rgba(128,128,128,.67);
  }
  .price{
    font-size: 18px;
    font-weight: bold;
    padding-left: 15px;
    color: red;
  }
  .cartAdd{
    position: absolute;
    bottom: 20px;
    right: 25px;
  }
</style>
