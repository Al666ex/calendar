import React from 'react'
import {Calendar} from 'antd'
import {IEvent} from '../models/IEvent'
import type { Dayjs } from 'dayjs';
import {formatDate} from '../utils/date'

interface IEventsCalendarProps{
  events : IEvent[]
}

const EventCalendar:React.FC<IEventsCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const events = props.events.filter(event => event.date === formatedDate)

    return (
      <div>
        {
          events.map((event,index) => 
            <div key={index}>
              {event.description}
            </div>
          )
        }
      </div> 
    );
  };  return (
    <Calendar 
      dateCellRender={dateCellRender} 
    />
  )
}

export default EventCalendar