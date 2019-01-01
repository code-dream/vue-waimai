<template>
   <div class="search">
    <headerTitle :title="'搜索'"></headerTitle>
      <div class="searchContent">
        <input type="text" placeholder="请输入商家或美食名称">
        <button>提交</button>
      </div>
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
.search
  overflow: hidden;
  .searchContent
    text-align: center;
    margin-top: 75px;
    input
      width: 70%;
      height: 35px;
      border: 1px solid #bcbab8;
      border-radius: 4px;
      font-size: 18px;
      background-color: #eeeeee;
      vertical-align: middle;
    button
      width: 20%; 
      height: 35px;
      vertical-align: middle;
      font-size: 18px;
      color: #fff;
      margin-left: 10px;
      background-color: #23a393;
      border: 1px;
      border-radius: 4px;
</style>
