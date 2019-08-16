import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Confirm from './views/Confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/signup',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/confirmation',
      name: 'confirm',
      component: Confirm,
    },
  ],
})
