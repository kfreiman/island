<template>
  <div class="users-list">
    <h2>Пользователи</h2>
      <!-- список всех доступных пользователей до авторизации-->
      <div v-if="!me" v-for="user, i in users">
        <button v-on:click="login(user, $event)">Войти как</button>
        {{ user.username }}
      </div>

      <!-- список пользователей после авторизации -->
      <div v-if="me" v-for="user, i in users">
        <!-- ссылка на профиль пользователя -->
        <a v-if="me.id != user.id" href="#">{{ user.username }}</a>
      </div>

      <p><i>Черновой пример не включает авторизацию по логину и паролю</i></p>
      <button v-on:click="logout()">Выйти</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'  // для сокращённой записи в methods

export default {
  name: 'UsersList',
  data: function () {
    return {
      me: null  // содержит данные залогиненного пользователя
    }
  },
  computed: {
    me: function () {  // при изменении me в store, значение обновляется в component
      return this.$store.state.me
    }
  },
  asyncComputed: {  // черновое решение. Возможно, лучше вынести в store
    users: function () {
      // получение списка пользователей с REST-сервера
      return this.axios.get('http://rest.island.local/users/').then(
        response => response.data.users
      )
    }
  },
  methods: {
    ...mapMutations([
      'login', // this.login(user) теперь this.$store.commit('login', user)
      'logout'
    ])
  }
}
</script>
