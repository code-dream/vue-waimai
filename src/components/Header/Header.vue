<template>
  <div class="headTitle">
    <slot name="topLeft"></slot>
    <slot name="topRight"></slot>
    <div class="mainTitle">
      <span>{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang='stylus'>
.headTitle 
  height: 55px
  line-height: 55px
  text-align: center
  color: #fff
  background-color: #23a393
  overflow: hidden
  .leftTitle
    float: left
    width: 40px
    .iconfont
      font-size: 36px
      vertical-align: middle
  .rightTitle
    float: right
    width: 80px
  .mainTitle
    font-size: 24px
    span
      display: inline-block
      width: 55%
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      vertical-align: top
</style>
