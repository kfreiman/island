export default function createWebSocketPlugin (socket) {
  return store => {
    store.subscribe(mutation => {
      if (mutation.type === 'login') {  // в store зафиксирована авторизация
        let user = mutation.payload

        // отправляю сообщение об авторизации
        socket.emit('login', {
          id: user.id,
          username: user.username
        })
      }
    })
  }
}

