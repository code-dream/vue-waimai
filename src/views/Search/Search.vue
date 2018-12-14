<template>
   <div class="search">
      <div class="searchTitle">
        <span>搜索</span>
      </div>
      <div class="searchContent">
        <input type="text" placeholder="请输入商家或美食名称">
        <button>提交</button>
      </div>
   </div>
</template>
<script>
export default {
  
}
</script>
<style>
.search{
  overflow: hidden;
}
.searchTitle{
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
.searchContent{
  text-align: center;
  margin-top: 55px;
}
.searchContent input{
  width: 70%;
  height: 35px;
  border: 1px;
  border-radius: 4px;
  font-size: 18px;
  background-color: #eeeeee;
  vertical-align: middle;
}
.searchContent button{
  width: 20%; 
  height: 35px;
  vertical-align: middle;
  font-size: 18px;
  color: #fff;
  margin-left: 10px;
  background-color: #23a393;
  border: 1px;
  border-radius: 4px;
}
</style>
