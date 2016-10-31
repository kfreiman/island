<template>
  <div class="alert">
    <div>
      <h4>Уведомления</h4>
    </div>

    <div v-for="message, i in messages">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data: function () {
    return {
      messages: []
    }
  },
  methods: {
    addMessage: function (message) {
      this.messages.unshift(message) // добавление нового сообщения сверху
    }
  },
  sockets: {  // подписка на сообщения из websocket
    logined: function (username) {
      this.addMessage('Вы вошли как ' + username)
    }
  }
}
</script>
