<template>
  <div class="cartContain" @click.stop>
    <transition name="change">
      <div class="reduce" ref="reduce"  @click="reduce" v-if="count"><i class="iconfont icon-Group-"></i></div>
    </transition>
    <transition name="fade">
      <div class="count" ref="count" v-if="count">{{count}}</div>
    </transition>
    <div class="add" @click="add">
      <i class="iconfont icon-tianjia"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    },
    reduce() {
      if(--this.count <= 0) {
        this.count = 0
      }
    }
  }
}
</script>
<style>
.reduce,.count,.add{
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  text-align: center;
  font-size: 22px;
  color: #23a393;
  border-radius: 15px;
  vertical-align: top;
}
.reduce{
  border: 1px solid #23a393;
}
.count{
  color: #abc1bf;
}
.add{
  color: #fff;
  background-color: #23a393;
  border: 1px solid #23a393;
}
.cartContain i{
  font-size: 26px;
}

/* 以下购物车空间按钮的动画效果 */
.change-enter-active, .change-leave-active{
  transition: all .2s;
}
.change-enter,.change-leave-to{
  opacity: 0;
  transform: translateX(60px) rotate(-180deg);
}
.fade-enter-active, .fade-leave-active{
  transition: transform .4s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
</style>
