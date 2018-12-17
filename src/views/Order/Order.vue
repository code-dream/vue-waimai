<template>
  <div>
      <div class="orderTitle">
        <span>订单</span>
      </div>
      <div class="orderContent">
        <img src="./image/person.png" alt="" width="90%"><br>
        <span>登录后查看外卖订单</span><br>
        <button>立即登录</button>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.orderTitle{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  font-size: 24px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  background-color: #23a393;
}
.orderContent{
  position: absolute;
  left: 0;right: 0;top: 0;bottom: 0;
  width: 300px;
  height: 400px;
  margin: auto auto;
  text-align: center;
}
.orderContent span{
  font-size: 22px;
  line-height: 40px;
  color: #bcbab8;
}
.orderContent button{
  width: 50%; 
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  background-color: #57a99a;
  border: 1px solid #57a99a;
  border-radius: 4px;
}
</style>
