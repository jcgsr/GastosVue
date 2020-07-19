import Vue from 'vue'
import App from './App.vue'
import Formulario from './components/Formulario'

import router from './router';
import axios from './axios'

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootswatch/dist/slate/bootstrap.min.css';
import 'animate.css';

Vue.config.productionTip = false
Vue.component([
  Formulario
])

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
