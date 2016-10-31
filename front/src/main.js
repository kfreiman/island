import Vue from 'vue'
import App from './App'
import AsyncComputed from 'vue-async-computed'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketio from 'vue-socket.io'
import {store, io} from './store'

Vue.use(VueSocketio, io)
Vue.use(AsyncComputed)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})

