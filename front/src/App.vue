<template>
  <div id="app">
    <users-list></users-list>
    <hr>
    <alert></alert>
  </div>
</template>

<script>
import UsersList from './components/UsersList'
import Alert from './components/Alert'

export default {
  name: 'app',
  components: {
    UsersList,
    Alert
  }
}
</script>
