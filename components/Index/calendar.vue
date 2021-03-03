<template>
    <v-card id="calendar">
    <v-img
        :src="imgPath"
        class="white--text align-start"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        
    >
        <v-container>
            <v-card-title>
                カレンダー
            </v-card-title>
          <v-card>
          <FullCalendar :options="calendarOptions" :eventSources="eventSources"/>
          </v-card>
        </v-container>
        
    </v-img>
    </v-card>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import jaLocale from "@fullcalendar/core/locales/ja";
  export default {
      components: {
        FullCalendar,
        name: 'カレンダー',
      },
    data() {
    return {
      imgPath: 'https://picsum.photos/1920/1080?random',
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin],
        headerToolbar: {
          left: 'prev today next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        locale:jaLocale,
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventsSet: this.handleEvents,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents  ,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
       googleCalendarApiKey: 'AIzaSyCwqHQ4OP160rtP8Rr5uS5j-8v9xfdl5EU',
       eventSources: [
        {
          googleCalendarId: 'neced8f741an5708tfoj7gngdg@group.calendar.google.com',
        },
      ],
      },
    }
  },
  methods: {
    handleEvents(events) {},
    handleWeekendsToggle() {},
    handleDateSelect(selectInfo) {},
    handleEventClick(clickInfo) {},
  }

  }
</script>