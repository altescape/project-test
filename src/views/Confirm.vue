<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-8 d-flex flex-column align-items-center">
        <img src="../assets/images/verify.svg" width="150" class="my-5" />
        <h1 class="h3 mb-0">Verify your email</h1>
        <p class="lead text-center my-3">
          We have sent an email to <strong>{{ email }}</strong> to verify your email.
          <br />
          Please click the link in that email to continue.
        </p>
        <p class="mb-5">
          <strong>Didn't receive an email?</strong>
          <a href="#"
             @click.prevent=""
             class="text-secondary font-weight-bold mx-1"
          >
            Send again
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Confirm',

  computed: {
    ...mapGetters({
      email: 'email',
    })
  }
}
</script>
