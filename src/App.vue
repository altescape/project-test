<template>
  <div>
    <Navigation />

    <div class="container my-5">
      <transition name="fade" mode="out-in" appear>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'

  export default {
    name: 'App',

    components: {
      Navigation
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Oleo+Script|Source+Sans+Pro:300,400,600&display=swap');
  @import 'styles/variables';
  @import '~bootstrap/scss/bootstrap';
  @import 'styles/main';
</style>
