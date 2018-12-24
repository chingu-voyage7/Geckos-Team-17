import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events';

const localizer = BigCalendar.momentLocalizer(moment) 

function handleEvent(event){
  console.log("Event clicked");
  console.log(event);
}
const Calendar = props => (
  <div style={{height:600,margin:"2.5%",marginTop:"5%"}}>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={handleEvent}
    />
  </div>
);

export default Calendar;