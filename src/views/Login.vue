<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-8 d-flex flex-column align-items-center">
        <h1 class="h3 mb-0">Login</h1>
        <p class="lead text-center my-3">
          This page intentionally left blank
        </p>
        <p class="mb-5">
          <strong>Don't have an account?</strong>
          <router-link :to="{ name: 'signup' }"
                       class="text-secondary font-weight-bold"
          >
            Sign up
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>
