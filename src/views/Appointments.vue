<template>
  <div class="container">
    <h1>予約カレンダー</h1>
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
