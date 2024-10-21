<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <!-- v-show='$route.meta.show' -->
    <appFooter />
  </div>
</template>

<script>
import AppHeader from './components/header/index.vue'
import footer from './components/footer/index.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    appFooter: footer,
  }
}
</script>

<style></style>
