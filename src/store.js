import Vue from 'vue'
import Vuex from 'vuex'
import { reqAddress, reqSwiperInf, reqShopList, reqUserInf, reqLoginout, reqShopInfo} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latitude: 40.10038,
    longitude: 116.36867,
    address: {},
    swiperInf: [],
    shopList: [],
    userInf: {},
    shopInfo: {}
  },
  mutations: {
    RECEIVE_ADDRESS(state, {address}) {
      state.address = address
    },
    RECEIVE_SWIPERINF(state, { swiperInf }) {
      state.swiperInf = swiperInf
    },
    RECEIVE_SHOPLIST(state, { shopList }) {
      state.shopList = shopList
    },
    SAVEUSERINF(state, {userInf}) {
      state.userInf = userInf
    },
    REQSHOPINF(state, {info}) {
      state.shopInfo = info
    }
  },
  actions: {
    // 异步获取地址
    async getAddress ({commit, state}) {
      const geohash = state.latitude + ',' +state.longitude
      const result = await reqAddress(geohash)
      if(result.code === 0) {
        const address = result.data
        commit('RECEIVE_ADDRESS', { address })
      }
    },
    // 异步获取轮播图信息
    async getSwiperInf({ commit }) {
      const result = await reqSwiperInf()
      if(result.code === 0) {
        const swiperInf = result.data
        commit('RECEIVE_SWIPERINF', { swiperInf })
      }
    },
    // 异步获取商家信息
    async getShopList({ commit, state }) {
      const {latitude, longitude} = state
      const result = await reqShopList(latitude, longitude)
      if(result.code === 0) {
        const shopList = result.data
        commit('RECEIVE_SHOPLIST', { shopList })
      }
    },
    // 异步获取session中保存的userID以获取用户相关信息
    async getUserInf({commit}) {
      const result = await reqUserInf()
      if(result.code === 0) {
        const userInf = result.data
        commit('SAVEUSERINF', {userInf})
      }
    },
    // 退出登入
    async reqLoginout({commit}) {
      const result = await reqLoginout()
      if(result.code === 0) {
        const userInf = {}
        commit('SAVEUSERINF', {userInf})
      }
    },
    // 获取具体商家的信息
    async reqShopInf({commit}) {
      const result = await reqShopInfo()
      if(result.code === 0) {
        const info = result.data
        commit('REQSHOPINF', {info})
      }
    }
  },
  getters: {

  }
})
