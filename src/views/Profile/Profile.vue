<template>
  <div class="profile">
      <headerTitle :title="'我的'"></headerTitle>
      <div  class="profileLogin">
        <router-link :to="userInf._id?'/user':'/login'">
          <div class="photo">
           <img src='./image/touxiang.jpg' alt="头像" v-if="userInf._id">
           <img src="./image/none.jpg" alt="未登入" v-if="!userInf._id">
          </div>
          <div class="arr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="denglu">
            <div v-if="!userInf.phone">{{userInf.name || '登录/注册'}}</div>
            <div>{{userInf.phone || '暂无绑定手机号'}}</div>
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
      <div class="loginout" v-if="userInf._id">
        <button @click="loginOut">退出登入</button>
      </div>
  </div>
</template>
<script>
import headerTitle from '../../components/Header/Header.vue'
export default {
  components: {
    headerTitle
  },
  computed: {
    userInf() {
      return this.$store.state.userInf
    }
  },
  methods: {
    loginOut() {
      this.$store.dispatch('reqLoginout')
    }
  }
}
</script>
<style lang='stylus'>
.profile
  width: 100%
  margin-bottom: 70px
  .profileLogin
    height: 100px
    padding: 15px 10px 15px 10px
    background: #23a393
    overflow: hidden
    .photo
      float: left
      width: 100px
      img
        width: 100px
        height: 100px
        border-radius: 50%
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
  .loginout
    width: 90%
    margin: 10px auto 
    text-align: center
    button
      width: 100%
      line-height: 40px
      font-size: 20px
      color: #fff
      background-color red 
      border-radius: 6px
      outline: none
</style>
