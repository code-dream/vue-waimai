<template>
  <div class="order">
      <div class="orderTitle">
        <span>我的</span>
      </div>
      <div class="login">
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
      </div>
      <div class="perInf">
        <div class="perContent">
          <div class="kuai">
            <span><b>0.00</b>元</span><br>
            <span>我的余额</span>
          </div>
        </div>
        <div class="perContent">
          <div class="kuai">
            <span><b>0</b>个</span><br>
            <span>我的优惠</span>
          </div>
        </div>
        <div class="perContent">
          <div class="kuai">
            <span><b>0</b>分</span><br>
            <span>我的积分</span>
          </div>
        </div>
      </div>
      <ul>
        <li class="personL">
          <div class="personArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="personD">
           <i class="iconfont icon-icon-test" style="color: #20716a"></i>
           <span>我的订单</span>
          </div>
        </li>
        <li class="personL">
          <div class="personArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="personD">
            <i class="iconfont icon-weibiaoti2fuzhi01" style="color: #43c0ac"></i>
            <span>积分商城</span>
          </div>
        </li>
        <li class="personL">
          <div class="personArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="personD">
            <i class="iconfont icon-huiyuan" style="color: #7acfdf"></i>
            <span>外卖会员</span>
          </div>
        </li>
        <li class="personL">
          <div class="personArr">
            <i class="iconfont icon-you"></i>
          </div>
          <div class="personD">
            <i class="iconfont icon-fuwu" style="color: #f8b500"></i>
            <span>服务中心</span>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.order{
  overflow: hidden;
}
.orderTitle{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  font-size: 24px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background-color: #23a393;
}
.login{
  height: 80px;
  padding: 15px 10px 15px 10px;
  margin-top: 45px;
  background: #23a393;
  overflow: hidden;
}
.login .photo{
  float: left;
  width: 70px;
}
.login .photo>div{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #9ad;
}
.login .denglu{
  height: 70px;
  margin-left: 80px;
  margin-right: 40px;
}
.login .denglu>div{
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  color: #fff;
}
.login .arr{
  width: 40px;
  height: 70px;
  color: #fff;
  line-height: 70px;
  float: right;
  text-align: center;
}
.perInf{
  display: flex;
  height: 115px;
  line-height: 115px;
  border-bottom: 1px solid #63686e;
}
.perContent{
  flex: 1;
  text-align: center;
}
.perContent .kuai{
  display: inline-block;
  line-height: 28px;
  vertical-align: middle;
}
.perContent .kuai b{
  font-size: 24px;
  color: red;
}
.perContent + .perContent{
  border-left: 1px solid #63686e;
}
.order .personL{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #63686e;
}
.personL .personD{
  height: 100%;
  padding-left: 10px;
  margin-right: 30px;
}
.personL .personD span{
  font-size: 20px;
  margin-left: 4px;
}
.personD .iconfont{
  font-size: 22px;
}
.personL .personArr{
  float: right;
  height: 100%;
  width: 30px;
  text-align: center;
}
.personArr .iconfont{
  font-size: 24px;
}
</style>
