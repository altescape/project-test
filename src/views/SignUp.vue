<template>
  <div class="d-flex align-items-center flex-column">
    <h1 class="h3 mb-0">Create your account</h1>
    <p class="lead text-center my-3">In 30 seconds you'll be a sign up pro!</p>
    <p v-if="persistedStore" class="my-0">
      <a href="#"
         @click.prevent="clearStorage"
         class="small btn btn-sm text-secondary font-weight-bold"
      >
        We saved your session from last time - you can clear it here
      </a>
    </p>
    <Form />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Form from '../components/Form'

export default {
  name: 'SignUp',

  components: {
    Form,
  },

  computed: {
    persistedStore() {
      return localStorage.getItem('_state')
    }
  },

  methods: {
    ...mapActions({
      clearAccount: 'clearAccount',
    }),
    clearStorage: function() {
      localStorage.clear()
      this.clearAccount()
    }
  }
}
</script>
