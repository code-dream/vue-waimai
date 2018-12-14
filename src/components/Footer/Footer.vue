<template>
  <div class="footer">
    <div class="footContent">
      <router-link to="/Msite">
        <i class="iconfont icon-waimaifuwu-shiyongfangbian"></i><br>
        <span>外卖</span>
      </router-link>
    </div>
    <div class="footContent">
      <router-link to="/search">
        <i class="iconfont icon-sousuo1"></i><br>
        <span>搜索</span>
      </router-link>
    </div>
    <div class="footContent">
      <router-link to="/order">
        <i class="iconfont icon-tuanduicankaoxian-8"></i><br>
        <span>订单</span>
      </router-link>
    </div>
    <div class="footContent">
      <router-link to="/profile">
        <i class="iconfont icon-tuanduicankaoxian-6"></i><br>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 70px;
  border-top: 1px solid #ebebe3;
  background: #fff;
}
.footContent{
  flex: 1;
  text-align: center;
  padding-top: 5px;
}
.footContent a{
  display: block;
  height: 100%;
  color: #63686e;
}
a.router-link-active{
  color: #45b7b7;
}
</style>
