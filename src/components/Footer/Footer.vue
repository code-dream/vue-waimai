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
<style lang='stylus'>
.footer
  width: 411px
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 70px;
  border-top: 1px solid #ebebe3;
  background-color: #fff
  .footContent
    flex: 1;
    text-align: center;
    align-self: center
    a
      display: block;
      height: 100%;
      line-height: 24px;
      color: #63686e;
      // 以下设置当前选定的路由的样式
      &.router-link-active
        color: #45b7b7;
      .iconfont
        font-size: 30px
</style>
