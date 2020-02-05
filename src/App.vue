<template>
  <div id="app">
    <Header/>
    <MainPage/>
  </div>
</template>

<script>
import Header from './components/header'
import MainPage from './components/mainPage'

export default {
  name: 'app',
  components: {
    Header,
    MainPage
  }
}
</script>

<style>

</style>
