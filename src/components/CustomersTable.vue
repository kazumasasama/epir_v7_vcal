<template>
  <div class="container">
    <b-row>
      <h1 class="title">顧客一覧</h1>
    </b-row>
    <div class="btn-container">
      <b-button variant="outline-primary">ホーム</b-button>
    </div>
    <b-row>
      <b-table striped hover :items="customers" @click="showDetail"></b-table>
    </b-row>
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
  methods: {
    showDetail(index, row) {
      this.$emit("showDetail", index, row)
    },
  },
};
</script>

<style>
.title {
  padding: 40px 0px 30px 0px;
}
.btn-container {
  width: 100%;
  text-align: right;
  margin-bottom: 20px;
}
</style>
