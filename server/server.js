const socket = require('socket.io')

const io = socket.listen(1923)

io.on('connection', function (client) {

  client.on('login', function (user) {
    client.join('vuejs')
    client.emit('logined', user.username)  // отправляю в ответ подтверждение
  })

})
