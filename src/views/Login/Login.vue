<template>
  <div>
    <div class="loginHead">
      <i class="iconfont icon-xiaoyuhao" @click="$router.back()"></i>
    </div>
    <div class="loginContent">
      <div class="loginTitle">简单的外卖</div>
      <div class="loginWay">
        <a href="javascript:;" :class="{on: isClick}" @click="isClick = !isClick">短信登录</a>
        <a href="javascript:;" :class="{on: !isClick}" @click="isClick = !isClick">密码登录</a>
      </div>
      <div class="loginInputs">
        <div class="loginInput" v-show="isClick">
          <input type="text" placeholder="手机号"><a href="javascript:;">获取验证码</a><br>
          <input type="text" placeholder="验证码">
        </div>
        <div class="loginInput" v-show="!isClick">
          <input type="text" placeholder="手机/邮箱/用户名"><br>
          <input type="password" placeholder="密码"><br>
          <input type="text" placeholder="验证码">
        </div>
      </div>
      <div class="loginTip">
        <span class="tipText">温馨提示:未注册简单的外卖账号的手机号
          ，登录时将自动注册，且代表已同意<span class="loginServe">
            《用户服务协议》</span></span>
      </div>
      <div class="loginBtn">
        <button>登录</button><br>
        <span>关于我们</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isClick: true
    }
  }
}
</script>
<style>
.loginHead{
  height: 55px;
  line-height: 55px;
  background-color: #23a393;
  color: #fff;
}
.loginHead .iconfont{
  font-size: 32px;
}
.loginContent{
  text-align: center;
}
.loginContent .loginTitle{
  height: 100px;
  line-height: 100px;
  font-size: 36px;
  font-weight: bold;
  color: #0c907d;
}
.loginWay{
  height: 40px;
  line-height: 32px;
}
.loginWay a{
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #0c907d;
}
.loginWay a:nth-child(1){
 margin-right: 35px;
}
.loginWay .on{
  border-bottom: 2px solid #0c907d;
}
.loginInput{
  line-height: 70px;
}
.loginInput a{
  position: absolute;
  white-space: nowrap;
  margin-left: -90px;
}
.loginInput input{
  width: 80%;
  height: 46px;
  line-height: 46px;
  font-size: 20px;
  border: 1px solid #bcbab8;
  border-radius: 4px;
  padding-left: 5px;
}
.loginInput .inputTop::before{
  content: '手机号码';
  display: inline-block;
}
.loginTip .tipText{
  display: inline-block;
  width: 82%;
  text-align: left;
  font-size: 14px;
  color: #bcbab8;
  line-height: 22px;
}
.loginTip .loginServe{
  color: #0c907d;
}
.loginBtn{
  margin-top: 20px;
  line-height: 50px;
  color: #bcbab8;
}
.loginBtn button{
  width: 80%;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  color: #fff;
  background-color: #57a99a;
  border: 1px solid #57a99a;
  border-radius: 4px;
}
</style>
