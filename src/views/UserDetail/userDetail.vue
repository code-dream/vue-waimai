<template>
  <div class="user">
    <Header title='个人信息'>
      <div class="leftTitle" slot="topLeft">
        <i class="iconfont icon-xiaoyuhao" @click="$router.back()"></i>
      </div>
    </Header>
    <div class="info">
      <div class="pic"><img src="./image/touxiang.jpg" alt="头像"></div>
      <div class="userName">{{userInfo.name||userInfo.phone}}</div>
    </div>
    <div class="zz">个人资料</div>
    <ul class="detail">
      <li class="item">
        <span class="label">性别：</span>
        <span class="content">男</span>
      </li>
      <li class="item">
        <span class="label">生日：</span>
        <span class="content">1997-1-3</span>
      </li>
      <li class="item">
        <span class="label">所处地区：</span>
        <span class="content">巴黎</span>
      </li>
      <li class="item">
        <span class="label">职业：</span>
        <span class="content">教师</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
export default {
  components: {
    Header
  },
  computed: {
    userInfo() {
      return this.$store.state.userInf
    }
  }
}
</script>
<style lang='stylus'>
  .user
    width: 100%
    .info
      text-align: center
      font-size: 20px
      .pic
        line-height: 130px
        img
          width: 100px
          height: 100px
          border: 1px solid gray
          border-radius: 50%
          vertical-align: middle
    .zz
      font-size: 18px
      padding: 10px
      margin-top: 20px
      border-bottom: 1px solid gray
      &::before
        content: ''
        display: inline-block
        width: 18px
        height: 3px
        border-top: 3px solid gray
        border-bottom: 9px double gray
    .detail
      .item
        line-height: 50px
        border-bottom: 1px solid
        .label
          padding-left: 10px
</style>
