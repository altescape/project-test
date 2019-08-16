<template>
  <div class="address-list" v-if="addresses.length > 1">
    <div class="list-group list-group-flush">
      <a v-for="address in addresses"
         :key="address.summaryline"
         @click.prevent="setAddress(address)"
         href="#"
         class="list-group-item list-group-item-action"
      >
        {{ address.summaryline }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddressList',

  data() {
    return {
      addressListOpen: false,
    }
  },

  computed: {
    ...mapGetters({
      addresses: 'addresses',
    }),

  },

  methods: {
    ...mapActions({
      setAddress: 'setAddress',
    }),
  },
}
</script>

<style lang="scss" scoped>
  .address-list {
    height: 200px;
    overflow: scroll;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    margin: 0 15px;
    border: 1px solid #979797;
    border-radius: 0 5px 5px 5px;
    position: absolute;
    z-index: 999;
    top: 37px;
  }
</style>
