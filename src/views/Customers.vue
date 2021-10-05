<template>
  <div class="container">
    <CustomersTable
    :key="key"
    :customers="customers"
    @showDetail="doShow"
  />
  <CustomerDetail />
  </div>
</template>

<script>
import CustomersTable from "../components/CustomersTable";
import CustomerDetail from "../components/CustomerDetail";

import axios from "axios";

export default {
  name: "Customers",
  components: { CustomersTable, CustomerDetail },
  data() {
    return {
      form: {},
      key: 0,
      customers: [],
      customerInfo: {},
      customerInfoBool: false,
    };
  },
  mounted: function () {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios.get("api/customers").then(
        (res) => {
          for (var i = 0; i < res.data.customers.length; i++) {
            this.customers.push(res.data.customers[i]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setCustomerInfo(id){
      axios.get(`api/customers/${id}.json`).then((res) => {
        this.customerInfo = res.data;
        this.customerInfoBool = true;
      });
    },
    doShow(index, row) {
      this.form = row;
      this.customerInfoBool = true;
    },
    doClose() {
      this.customerInfoBool = true;
    },
  },
};
</script>
