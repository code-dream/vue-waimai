<template>
  <div class="main">
    <div class="headTitle">
      <div class="leftTitle">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="rightTitle">
        <span>登录注册</span>
      </div>
      <div class="mainTitle">
        <span>我的地址</span>
      </div>
    </div>
    <div class="lunbo">
      <swiper :options='swiperOption' ref="mySwiper">
        <swiperSlide>
          <div class="mainWrap">
            <div class="mainContent">1</div>
            <div class="mainContent">2</div>
            <div class="mainContent">3</div>
            <div class="mainContent">4</div>
          </div>
          <div class="mainWrap">
            <div class="mainContent">5</div>
            <div class="mainContent">6</div>
            <div class="mainContent">7</div>
            <div class="mainContent">8</div>
          </div>
        </swiperSlide>
        <swiperSlide>
          <div class="mainWrap">
            <div class="mainContent">9</div>
            <div class="mainContent">10</div>
            <div class="mainContent">11</div>
            <div class="mainContent">12</div>
          </div>
          <div class="mainWrap">
            <div class="mainContent">5</div>
            <div class="mainContent">6</div>
            <div class="mainContent">7</div>
            <div class="mainContent">8</div>
          </div>
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
    <div class="shopList">
      <p class="tip">
        <span class="sangang"></span>
        <span>附近商家</span>
      </p>
      <ul>
        <li class="shop">
          <div class="shopPic">
            <img src="" alt="图片">
          </div>
          <div class="shopDetail">
            <div class="shopName">湖南土菜馆</div>
            <div class="star">****</div>
            <div class="qisong">￥20起送/配送费￥2</div>
          </div>
        </li>
        <li class="shop">
          <div class="shopPic">
            <img src="" alt="图片">
          </div>
          <div class="shopDetail">
            <div class="shopName">湖南土菜馆</div>
            <div class="star">****</div>
            <div class="qisong">￥20起送/配送费￥2</div>
          </div>
        </li>
        <li class="shop">
          <div class="shopPic">
            <img src="" alt="图片">
          </div>
          <div class="shopDetail">
            <div class="shopName">湖南土菜馆</div>
            <div class="star">****</div>
            <div class="qisong">￥20起送/配送费￥2</div>
          </div>
        </li>
        <li class="shop">
          <div class="shopPic">
            <img src="" alt="图片">
          </div>
          <div class="shopDetail">
            <div class="shopName">湖南土菜馆</div>
            <div class="star">****</div>
            <div class="qisong">￥20起送/配送费￥2</div>
          </div>
        </li>
        <li class="shop">
          <div class="shopPic">
            <img src="" alt="图片">
          </div>
          <div class="shopDetail">
            <div class="shopName">湖南土菜馆</div>
            <div class="star">****</div>
            <div class="qisong">￥20起送/配送费￥2</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style>
/* 标题样式 */
.main{
  overflow: hidden;
}
.headTitle{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  height: 55px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  background-color: #23a393;
  overflow: hidden;
}
.headTitle .leftTitle{
  float: left;
  width: 40px;
}
.leftTitle .iconfont{
  font-size: 36px;
  vertical-align: middle;
}
.headTitle .rightTitle{
  float: right;
  width: 80px;
}
.headTitle .mainTitle{
  font-size: 24px;
  margin: 0 80px 0 40px;
}
/* 轮播图样式 */
.lunbo{
  margin-top: 55px;
}
.mainWrap{
  display: flex;
}
.mainWrap .mainContent{
  flex: 1;
  text-align: center;
  height: 100px;
  line-height: 100px;
}
/* 商家列表样式 */
.shopList{
  margin-bottom: 70px;
}
.shopList .tip{
  height: 40px;
  line-height: 40px;
  color: #63686e;
  background-color: #9ad;
}
.shopList .tip .sangang{
  display: inline-block;
  width: 15px;
  height: 3px;
  border-top: 7px double;
  border-bottom: 2px solid;
  vertical-align: middle;
  margin: 0 5px 0 10px;
}
/* 列表详情 */
.shopList .shop{
  height: 80px;
  padding: 10px;
  border-bottom: 1px solid #63686e;
}
.shopList .shop .shopPic{
  float: left;
  width: 80px;
  height: 100%;
  background-color: pink;
}
.shopList .shop img{
  width: 100%;
}
.shopList .shop .shopDetail{
  height: 100%;
  margin-left: 90px;
  background: #add;
}
.shopDetail .shopName{
  font-size: 20px;
  font-weight: bold;
  height: 40px;
}
.shopDetail .star{
  height: 20px;
}
.shopDetail .qisong{
  height: 20px;
  line-height: 20px;
  vertical-align: bottom;
}
</style>
