<template>
  <div>
    <b-button @click="customerInfoBool = !customerInfoBool">
      Open Modal
    </b-button>

    <b-modal v-model="customerInfoBool">Hello From Modal!</b-modal>
  </div>
</template>

<script>
export default {
  props: {
    customerInfo: {
      type: Object,
      default() {
        return {
          id: "",
          name: "",
          birthday: "",
          gender: "",
          phone: "",
          email: "",
          line_id: "",
          memo: "",
        }
      }
    },
    customerInfoBool: false,
  },
};
</script>
