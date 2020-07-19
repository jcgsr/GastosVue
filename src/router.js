import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Formulario from './components/Formulario'

Vue.use(Router)

export default new Router({
   mode: 'history',
   linkExactActiveClass: 'link-active',
   routes: [{
      path: '/',
      name: 'home',
      component: Home
   },{
      path:'/form',
      name: 'form',
      component: Formulario
   }]
})