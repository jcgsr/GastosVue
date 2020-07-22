import Vue from 'vue'
import App from './App.vue'
import Formulario from './components/Formulario'
import TabelaGastos from './components/TabelaGastos'

import router from './router';
import axios from './axios'

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootswatch/dist/slate/bootstrap.min.css';
import 'animate.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css'


Vue.config.productionTip = false
Vue.component([
  Formulario, TabelaGastos
])

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
