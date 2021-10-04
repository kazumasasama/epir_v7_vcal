<template>
  <CustomersTable
    :key="key"
    :customers="customers"
  />
</template>

<script>
import CustomersTable from "../components/CustomersTable";
import axios from "axios";

export default {
  name: "Customers",
  components: { CustomersTable },
  data() {
    return {
      form: {},
      key: 0,
      customers: [],
      customerInfo: {},
      customerInfoBool: false,
    };
  },
  mounted: function() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios.get('api/customers').then((res) => {
        for(var i = 0; i < res.data.customers.length; i++) {
        this.customers.push(res.data.customers[i]);
        }
      }, (error) => {
        console.log(error);
      });
    },
    setCustomerInfo(id){
        axios.get(`api/customers/${id}.json`).then(res => {
          this.customerInfo = res.data;
          this.customerInfoBool = true;
        });
      }
  }
};
</script>
