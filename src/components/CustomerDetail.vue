<template>
  <div>
    <b-button @click="customerInfoBool = !customerInfoBool">Open Modal</b-button>

    <b-modal v-model="customerInfoBool">Hello From Modal!</b-modal>
  </div>
</template>

<script>
export default {
  props: {
    customerInfo: {},
    customerInfoBool: false,
  },
};
</script>

data() {
    return {
      form: {},
      key: 0,
      customers: [],
      customerInfo: {},
      customerInfoBool: false,
    };
  },