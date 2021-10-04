<template>
  <div>
    <b-table striped hover :items="customers"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    customers: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
