<template>
  <div class="row flex-column justify-content-center align-items-center my-4 form">
    <div class="col">
      <div class="form-group">
        <label for="email">
           <span v-if="errors.has('email')" class="text-warning">
           {{ errors.first('email') }}
           </span>
          <span v-else>Email</span>
        </label>
        <input type="email"
               v-model="email"
               v-validate="'required|email'"
               data-vv-delay="500"
               :class="{'form-control': true, 'is-warning': errors.has('email') }"
               id="email"
               name="email"
               placeholder="Enter email"
        >
      </div>

      <div class="form-group">
        <label for="password">
          <span v-if="errors.has('password')" class="text-warning">
            {{ errors.first('password') }}
          </span>
          <span v-else>Password</span>
        </label>
        <div class="password-with-show">
          <input :type="passwordFieldType"
                 v-model="password"
                 v-validate="'required|min:8'"
                 data-vv-delay="500"
                 :class="{'form-control': true, 'is-warning': errors.has('password') }"
                 id="password"
                 name="password"
                 placeholder="Enter Password"
          >
          <a href="#"
             @click.prevent="switchPasswordFieldType"
             class="icon"
             :disabled="!password"
          >
            <font-awesome-icon v-if="passwordFieldType == 'password'" icon="eye" />
            <font-awesome-icon v-else icon="eye-slash" />
          </a>
        </div>
      </div>

      <div class="form-group">
        <label for="confirmation">
          <span v-if="errors.has('confirmation')" class="text-warning">
            {{ errors.first('confirmation') }}
          </span>
          <span v-else>Password confirmation</span>
        </label>
        <div class="password-with-show">
          <input :type="passwordFieldType"
                 v-model="confirmedPassword"
                 v-validate="{ is: password }"
                 data-vv-delay="500"
                 :class="{'form-control': true, 'is-warning': errors.has('confirmation') }"
                 id="confirmation"
                 name="confirmation"
                 placeholder="Enter Password again"
          >
          <a href="#"
             @click.prevent="switchPasswordFieldType"
             class="icon"
             :disabled="!confirmedPassword"
          >
            <font-awesome-icon v-if="passwordFieldType == 'password'" icon="eye" />
            <font-awesome-icon v-else icon="eye-slash" />
          </a>
        </div>
      </div>

      <div class="form-group">
        <label for="firstName">
          <span v-if="errors.has('firstName')" class="text-warning">
            {{ errors.first('firstName') }}
          </span>
          <span v-else>First name</span>
        </label>
        <input type="text"
               v-model="firstName"
               v-validate="'required|alpha'"
               data-vv-delay="500"
               :class="{'form-control': true, 'is-warning': errors.has('firstName') }"
               id="firstName"
               name="firstName"
               placeholder="Enter your given name"
        >
      </div>

      <div class="form-group">
        <label for="lastName">
          <span v-if="errors.has('lastName')" class="text-warning">
            {{ errors.first('lastName') }}
          </span>
          <span v-else>Last name</span>
        </label>
        <input type="text"
               v-model="lastName"
               v-validate="'required|alpha'"
               data-vv-delay="500"
               :class="{'form-control': true, 'is-warning': errors.has('lastName') }"
               id="lastName"
               name="lastName"
               placeholder="Enter your family name"
        >
      </div>

      <div class="form-group">
        <label for="postcode">
          <span v-if="errors.has('postcode')" class="text-warning">
            {{ errors.first('postcode') }}
          </span>
          <span v-else>Postcode (only NR14 7PZ will work)</span>
        </label>

        <div class="row address-row">
          <div class="col-5">
            <input type="text"
                   v-model="postcode"
                   v-validate="'required|min:6'"
                   data-vv-delay="500"
                   :class="{'form-control': true, 'is-warning': errors.has('postcode') }"
                   id="postcode"
                   name="postcode"
                   placeholder="Postcode"
            >
          </div>
          <div class="col">
            <button class="btn btn-outline-secondary btn-block"
                    @click.prevent="getAddress"
                    :disabled="!postcode"
            >
              Find address
            </button>
          </div>

          <AddressList />
        </div>

        <div class="my-3" v-show="showAddressForm">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label for="addressLine1">
                  <span v-if="errors.has('addressLine1')" class="text-warning">
                    {{ errors.first('addressLine1') }}
                  </span>
                  <span v-else>Address line 1</span>
                </label>
                <input type="text"
                       v-model="address.addressLine1"
                       v-validate="'required'"
                       data-vv-delay="500"
                       :class="{'form-control': true, 'is-warning': errors.has('addressLine1') }"
                       id="addressLine1"
                       name="addressLine1"
                       placeholder="Enter first line of your address"
                >
              </div>

              <div class="form-group">
                <label for="addressLine2">Address line 2 (Optional)</label>
                <input type="text"
                       v-model="address.addressLine2"
                       class="form-control"
                       id="addressLine2"
                       name="addressLine2"
                >
              </div>

              <div class="form-group">
                <label for="addressLine3">Address line 3 (Optional)</label>
                <input type="text"
                       v-model="address.addressLine3"
                       class="form-control"
                       id="addressLine3"
                >
              </div>

              <div class="form-group">
                <label for="postTown">
                  <span v-if="errors.has('postTown')" class="text-warning">
                    {{ errors.first('postTown') }}
                  </span>
                  <span v-else>Town or city</span>
                </label>
                <input type="text"
                       v-model="address.city"
                       v-validate="'required|alpha'"
                       data-vv-delay="500"
                       :class="{'form-control': true, 'is-warning': errors.has('postTown') }"
                       id="postTown"
                       name="postTown"
                       placeholder="Enter your town or city"
                >
              </div>

              <div class="form-group">
                <label for="county">
                  <span v-if="errors.has('county')" class="text-warning">
                    {{ errors.first('county') }}
                  </span>
                  <span v-else>County</span>
                </label>
                <input type="text"
                       v-model="address.county"
                       v-validate="'required|alpha'"
                       data-vv-delay="500"
                       :class="{'form-control': true, 'is-warning': errors.has('county') }"
                       id="county"
                       name="county"
                       placeholder="Enter your county"
                >
              </div>

              <a href="#" @click.prevent="toggleAddressForm"
                 class="card-link">
                Enter address automatically
              </a>
            </div>
          </div>
        </div>

        <div v-show="!showAddressForm" class="my-3">
          <div class="card" v-if="address.summaryline">
            <div class="card-body">
              <h5 class="card-title">Address:</h5>
              <p class="card-text">{{ address.summaryline }}</p>
              <a href="#" @click.prevent="clearAddress"
                 class="card-link">
                Clear Address
                <font-awesome-icon icon="times-circle" />
              </a>
            </div>
          </div>
          <p class="my-3" v-else>
            <a href="#"
               @click.prevent="toggleAddressForm"
               class="font-weight-bold text-dark text-underline">
              Enter address manually
            </a>
          </p>
        </div>
      </div>

      <div class="form-group d-flex align-items-center flex-column my-4">
        <button type="submit"
                class="btn btn-primary btn-block"
                @click.prevent.stop="submitForm"
        >
          Sign up
        </button>
        <transition name="fade" mode="in-out">
          <p class="small my-3 text-warning" v-if="promptMessage">
            {{ promptMessage }}
          </p>
        </transition>
        <p class="my-3">
          Already signed up?
          <router-link :to="{ name: 'login' }"
                       class="text-secondary font-weight-bold"
          >
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddressList from './AddressList'

export default {
  name: 'Form',

  components: { AddressList },

  data() {
    return {
      apiKey: 'PCW45-12345-12345-1234X',
      confirmedPassword: '',
      passwordFieldType: 'password',
      showAddressForm: false,
      addressResults: '',
      promptMessage: '',
    }
  },

  computed: {
    email: {
      get() {
        return this.$store.state.account.email
      },
      set(newValue) {
        this.setEmail(newValue)
      }
    },
    password: {
      get() {
        return this.$store.state.account.password
      },
      set(newValue) {
        this.setPassword(newValue)
      }
    },
    firstName: {
      get() {
        return this.$store.state.account.firstName
      },
      set(newValue) {
        this.setFirstName(newValue)
      }
    },
    lastName: {
      get() {
        return this.$store.state.account.lastName
      },
      set(newValue) {
        this.setLastName(newValue)
      }
    },
    postcode: {
      get() {
        return this.$store.state.account.postcode
      },
      set(newValue) {
        this.setPostcode(newValue)
      }
    },
    ...mapGetters({
      address: 'address',
    })
  },

  methods: {
    ...mapActions({
      getAddress: 'getAddress',
      clearAddress: 'clearAddress',
      setEmail: 'setEmail',
      setPassword: 'setPassword',
      setFirstName: 'setFirstName',
      setLastName: 'setLastName',
      setPostcode: 'setPostcode',
      setAccount: 'setAccount',
    }),

    switchPasswordFieldType: function() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },

    submitForm: function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.setAccount({
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            postcode: this.postcode,
            address: {
              addressLine1: this.address.addressLine1,
              addressLine2: this.address.addressLine2,
              addressLine3: this.address.addressLine3,
              city: this.address.city,
              county: this.address.county,
              summaryline: this.address.summaryline,
            },
          })
          this.$router.push({ name: 'confirm' })
          return;
        }

        this.showAddressForm = true
        this.promptMessage = 'Please fix any errors in the form'
      });
    },

    toggleAddressForm: function() {
      this.showAddressForm = !this.showAddressForm
    },
  }
}
</script>

<style lang="scss" scoped>
  .form {
    max-width: 300px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: 100;
  }

  input[type="email"],
  input[type="text"],
  input[type="password"] {
    border-color: #979797;
  }

  input[type="email"].is-warning,
  input[type="text"].is-warning,
  input[type="password"].is-warning {
    border-color: #fd7e14;
    background-color: #fff9f4;
  }

  ::placeholder {
    color: #CCC;
    opacity: 1;
  }

  .password-with-show {
    position: relative;

    .icon {
      position: absolute;
      right: 10px;
      bottom: 7px;
      width: 30px;
      text-align: center;

      &[disabled] {
        color: #CCC;
        cursor: not-allowed;
      }
    }
  }

  .form-group {
    position: relative;
  }

  .error-message {
    position: absolute;
    right: 0;
  }

  .address-row {
    position: relative;
  }
</style>
