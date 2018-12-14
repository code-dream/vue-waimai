import Vue from 'vue'
import Router from 'vue-router'
import Msite from './views/Msite/Msite.vue'
import Order from './views/Order/Order.vue'
import Profile from './views/Profile/Profile.vue'
import Search from './views/Search/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/msite',
    component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: '/Msite'
    }
  ]
})
