import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import persist from 'vuex-persist-state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postcoderApiKey: 'PCW45-12345-12345-1234X',
    account: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      postcode: 'NR14 7PZ',
      address: {
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        city: '',
        county: '',
        summaryline: '',
      },
      verified: false,
    },
    addresses: [],
  },

  mutations: {
    clearAccount(state) {
      state.account = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        postcode: '',
        address: {
          addressLine1: '',
          addressLine2: '',
          addressLine3: '',
          city: '',
          county: '',
          summaryline: '',
        },
      }
    },

    setEmail(state, payload) {
      state.account.email = payload
    },

    setPassword(state, payload) {
      state.account.password = payload
    },

    setFirstName(state, payload) {
      state.account.firstName = payload
    },

    setLastName(state, payload) {
      state.account.lastName = payload
    },

    setPostcode(state, payload) {
      state.account.postcode = payload
    },

    setAccount(state, payload) {
      state.account = payload
    },

    setAddresses(state, payload) {
      state.addresses = payload
    },

    clearAddresses(state) {
      state.addresses = []
    },
  },

  actions: {
    clearAccount({ commit }) {
      commit('clearAccount')
    },

    setEmail({ commit }, email) {
      commit('setEmail', email)
    },

    setPassword({ commit }, password) {
      commit('setPassword', password)
    },

    setFirstName({ commit }, firstName) {
      commit('setFirstName', firstName)
    },

    setLastName({ commit }, lastName) {
      commit('setLastName', lastName)
    },

    setPostcode({ commit }, postcode) {
      commit('setPostcode', postcode)
    },

    setAccount({ commit }, account) {
      commit('setAccount', account)
    },

    setAddress({ commit }, address) {
      const addressLine1 = address.addressline1
      const addressLine2 = address.addressline2
      const addressLine3 = address.addressline3
      const city = address.posttown
      const { county } = address
      const { postcode } = address
      const { summaryline } = address

      commit('setAccount', {
        ...this.state.account,
        address: {
          addressLine1,
          addressLine2,
          addressLine3,
          city,
          county,
          postcode,
          summaryline,
        },
      })

      commit('clearAddresses')
    },

    setAddresses({ commit }, addresses) {
      commit('setAddresses', addresses)
    },

    getAddress({ commit, dispatch }) {
      const url = `https://ws.postcoder.com/pcw/${this.state.postcoderApiKey}/address/GB/${encodeURIComponent(this.state.account.postcode)}?lines=2&page=0`
      axios.get(url).then((response) => {
        if (response.data.length === 1) {
          const address = response.data[0]
          dispatch('setAddress', address)
        } else if (response.data.length > 1) {
          commit('setAddresses', response.data)
        }
      })
    },

    clearAddress({ commit }) {
      commit('setAccount', {
        ...this.state.account,
        address: {
          addressLine1: '',
          addressLine2: '',
          addressLine3: '',
          city: '',
          county: '',
          postcode: '',
          summaryline: '',
        },
      })
    },
  },

  getters: {
    postcode: state => state.account.postcode,
    email: state => state.account.email,
    password: state => state.account.password,
    firstName: state => state.account.firstName,
    lastName: state => state.account.lastName,
    address: state => state.account.address,
    addresses: state => state.addresses,
  },

  plugins: [
    persist({
      key: '_state',
      throttle: 1000,
      restoreOnLoad: true,
    }),
  ],
})
