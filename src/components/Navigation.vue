<template>
  <nav class="navbar navbar-expand-lg bg-white static-top">
    <div class="container">
      <a href="/" class="navbar-brand">
        <img src="../assets/images/logo.svg" alt="Signuppro logo" />
      </a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-link"
                       :to="{ name: 'login' }"
                       v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <li class="nav-item"
                :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
            >
              <a :href="href" @click="navigate">Login</a>
            </li>
          </router-link>
          <router-link class="nav-link"
                       :to="{ name: 'signup' }"
                       v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <li class="nav-item"
                :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
            >
              <a :href="href" @click="navigate">Sign up</a>
            </li>
          </router-link>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .navbar-brand img {
    width: 142px;
    margin: 12px 0;
  }

  .navbar {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .nav-item a {
    font-weight: 600;
  }

  .router-link-active,
  .router-link-exact-active {
    a {
      color: $secondary;
    }
  }
</style>
