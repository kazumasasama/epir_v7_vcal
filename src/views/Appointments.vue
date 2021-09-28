<template>
  <div class="appointments">
    <Calendar />
  </div>
</template>
<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar.vue";

export default {
  name: "Appointments",
  components: {
    Calendar,
  },
};
</script>
