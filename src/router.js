import Vue from 'vue'
import Router from 'vue-router'
import Msite from './views/Msite/Msite.vue'
import Order from './views/Order/Order.vue'
import Profile from './views/Profile/Profile.vue'
import Search from './views/Search/Search.vue'
import Login from './views/Login/Login.vue'
import Shop from './views/Shop/shop.vue'
import ShopFood from './views/Shop/ShopFood/shopFood.vue'
import ShopEvaluate from './views/Shop/ShopEvaluate/shopEvaluate.vue'
import ShopInfo from './views/Shop/ShopInfo/shopInfo.vue'
import UserDetail from './views/UserDetail/userDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        keepAlive: true,
        isShow: true,
        index: 1,
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        isShow: true,
        index: 3
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShow: true,
        index: 4
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true,
        index: 2
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        index: 5
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta: {
        index: 6
      },
      children: [
        {
          path: '/shop/food',
          component: ShopFood,
          meta: {
            index: 8
          }
        },
        {
          path: '/shop/evaluate',
          component: ShopEvaluate,
          meta: {
            index: 9
          }
        },
        {
          path: '/shop/info',
          component: ShopInfo,
          meta: {
            index: 10
          }
        },
        {
          path: '/',
          redirect: '/shop/food'
        }
      ]
    },
    {
      path: '/user',
      component: UserDetail,
      meta: {
        index: 7
      }
    },
    {
      path: '/',
      redirect: '/Msite'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = window.scrollY
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
