import Vue from 'vue'
import Vuex from 'vuex'
import {reqAddress, reqSwiperInf, reqShopInf} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latitude: 40.10038,
    longitude: 116.36867,
    address: {},
    swiperInf: [],
    shopInf: [],
  },
  mutations: {
    RECEIVE_ADDRESS(state, {address}) {
      state.address = address
    },
    RECEIVE_SWIPERINF(state, { swiperInf }) {
      state.swiperInf = swiperInf
    },
    RECEIVE_SHOPINF(state, { shopInf }) {
      state.shopInf = shopInf
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
    async getShopInf({ commit, state }) {
      const {latitude, longitude} = state
      const result = await reqShopInf(latitude, longitude)
      if(result.code === 0) {
        const shopInf = result.data
        commit('RECEIVE_SHOPINF', { shopInf })
      }
    },
  },
  getters: {

  }
})
