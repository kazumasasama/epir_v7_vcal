<template>
  <div class="container">
    <h1>予約カレンダー</h1>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
        initialView: "timeGridWeek",
        dateClick: this.handleDateClick,
        nowIndicator: true,
        locales: jaLocale,
        locale: "ja",
        timeZone: "Asia/Tokyo",
        slotDuration: "00:30:00",
        scrollTime: "10:00:00",
        titleFormat: { year: "numeric", month: "2-digit" },
        selectable: true,
        editable: true,
        eventOverlap: false,
        events: [
          {
            hour: "numeric",
            minute: "2-digit",
            meridiem: false,
          },
          {
            title: "にゃんこ",
            start: "2021-10-07T16:00:00",
            end: "2021-10-07T19:00",
            color: "black",
          },
          {
            title: "わんこ",
            start: "2021-10-08T16:00:00",
            end: "2021-10-08T19:00",
          },
        ],
        businessHours: {
          // days of week. an array of zero-based day of week integers (0=Sunday)
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],

          startTime: "10:00",
          endTime: "20:00",
        },
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        },
        views: {
          dayGridMonth: {
            headerToolbar: {
              start: "",
              center: "prev today next",
              end: "dayGridMonth,timeGridWeek",
            },
          },
          timeGridWeek: {
            headerToolbar: {
              center: "prev today next",
              end: "dayGridMonth,timeGridWeek",
            },
          },
        },
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>
