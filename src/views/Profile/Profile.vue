<template>
  <div class="profile">
      <headerTitle :title="'我的'"></headerTitle>
      <div  class="profileLogin">
        <router-link to="/login">
          <div class="photo">
           <div></div>
          </div>
          <div class="arr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="denglu">
            <div>登录/注册</div>
            <div>暂无绑定手机号</div>
          </div>
        </router-link>
      </div>
      <div class="profileInf">
        <div class="profileContent">
          <div class="kuai">
            <span><b>0.00</b>元</span><br>
            <span>我的余额</span>
          </div>
        </div>
        <div class="profileContent">
          <div class="kuai">
            <span><b>0</b>个</span><br>
            <span>我的优惠</span>
          </div>
        </div>
        <div class="profileContent">
          <div class="kuai">
            <span><b>0</b>分</span><br>
            <span>我的积分</span>
          </div>
        </div>
      </div>
      <ul>
        <li class="profileL">
          <div class="profileArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="profileD">
           <i class="iconfont icon-icon-test" style="color: #ff6473"></i>
           <span>我的订单</span>
          </div>
        </li>
        <li class="profileL">
          <div class="profileArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="profileD">
            <i class="iconfont icon-weibiaoti2fuzhi01" style="color: #43c0ac"></i>
            <span>积分商城</span>
          </div>
        </li>
        <li class="profileL">
          <div class="profileArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="profileD">
            <i class="iconfont icon-huiyuan" style="color: #00587a"></i>
            <span>外卖会员</span>
          </div>
        </li>
        <li class="profileL">
          <div class="profileArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="profileD">
            <i class="iconfont icon-fuwu" style="color: #f8b500"></i>
            <span>服务中心</span>
          </div>
        </li>
      </ul>
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
.profile
  overflow: hidden
  margin-bottom: 70px
  .profileLogin
    height: 100px
    padding: 15px 10px 15px 10px
    margin-top: 55px
    background: #23a393
    overflow: hidden
    .photo
      float: left
      width: 100px
    .photo>div
      width: 100px
      height: 100px
      border-radius: 50%
      background-color: #9ad
    .denglu
      height: 100px
      margin-left: 110px
      margin-right: 40px
      padding-top: 15px
    .denglu>div
      height: 35px
      line-height: 35px
      font-size: 18px
      color: #fff
    .arr
      width: 40px
      height: 100px
      color: #fff
      line-height: 100px
      float: right
      text-align: center
  .profileInf
    display: flex
    height: 115px
    line-height: 115px
    border-bottom: 1px solid #bcbab8
    .profileContent
      flex: 1
      text-align: center
      .kuai
        display: inline-block
        line-height: 28px
        vertical-align: middle
        b
          font-size: 24px
          color: red
      + .profileContent
        border-left: 1px solid #bcbab8
  .profileL
    height: 60px
    line-height: 60px
    border-bottom: 1px solid #bcbab8
    .profileD
      height: 100%
      padding-left: 10px
      margin-right: 30px
      span
        font-size: 20px
        margin-left: 4px
      .iconfont
        font-size: 22px
    .profileArr
      float: right
      height: 100%
      width: 30px
      text-align: center
      .iconfont
        font-size: 24px
</style>
