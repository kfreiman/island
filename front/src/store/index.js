import Vue from 'vue'
import Vuex from 'vuex'
import createWebSocketPlugin from './plugins'
import Socket from 'socket.io-client'

const io = Socket('http://127.0.0.1:1923')  // сервер в server.js

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    me: null  // залогиненный пользователь
  },
  mutations: {
    login (state, user) {
      state.me = user  // сохраняю залогиневшегося пользователя
    },
    logout (state) {
      state.me = null
    }
  },
  plugins: [
    createWebSocketPlugin(io)  // смотрит изменения в store и шлёт сообщения по websocket
  ]
})

export {store, io}
