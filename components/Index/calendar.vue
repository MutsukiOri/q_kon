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
              <v-container>
                <FullCalendar :options="calendarOptions"/>
              </v-container>
            </v-card>
        </v-container>
        
    </v-img>
    </v-card>
</template>

<script>
import FullCalendar, { ViewApi } from '@fullcalendar/vue'
import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
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
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, googleCalendarPlugin],
        headerToolbar: {
          right: 'prev,next',
          center: 'title today',
          left: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        views: {
        timeGridWeek: {
          titleFormat: { year: 'numeric', month: 'numeric', day: 'numeric'},
        },
        dayGridWeek: {
          titleFormat: { year: 'numeric', month: 'numeric', day: 'numeric'},
        },
        listMonth: {
          titleFormat: { year: 'numeric', month: 'numeric' },
          listDayFormat: { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'narrow' },
          listDaySideFormat: false
        },
        listWeek: {
          titleFormat: { month: 'numeric', day: 'numeric' },
          listDayFormat: { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'narrow' },
          listDaySideFormat: false
        },
        },
        locale:jaLocale,
        editable: false,
        eventDisplay: 'block',
        // selectable: true,
        // selectMirror: true,
        // dayMaxEvents: true,
        navLinks: true,
        weekends: true,
        nowIndicator: true,
        dayCellContent: function(e) {
            e.dayNumberText = e.dayNumberText.replace('日', '');
          },
        eventClick: function(info) {
        //カレンダーへのリンクはさせません。
        info.jsEvent.preventDefault();
        hogehoge(info);
          },
        // select: this.handleDateSelect,
        // eventsSet: this.handleEvents,
        // eventClick: this.handleEventClick,
        // eventsSet: this.handleEvents,
        // dateClick: this.handleDateClick,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
        googleCalendarApiKey: 'AIzaSyCwqHQ4OP160rtP8Rr5uS5j-8v9xfdl5EU',
        eventSources: [
          {
            googleCalendarId: 'neced8f741an5708tfoj7gngdg@group.calendar.google.com',
            color: "#F5917E",
            // textColor: "grey"
            // display: 'background',
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
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    },
    hogehoge(info) {
      //なんかやりたいこと
      alert('date click! ' + info)
    }


  },

  }
</script>
<style>
/* @import '~/node_modules/@fullcalendar/core/main.css'; */
@import '~/node_modules/@fullcalendar/daygrid/main.css';
@import '~/node_modules/@fullcalendar/timegrid/main.css';

@media screen and (max-width:768px) {
  body {
    font-size: 62.5%;
  }
}
.fc-sun { color: red; }  /* 日曜日 */
.fc-sat { color: blue; } /* 土曜日 */
</style>