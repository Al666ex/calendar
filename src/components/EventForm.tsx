

import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import React, { useState } from 'react'
import { rules } from '../utils/rules'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { Moment } from 'moment'
import { Dayjs } from 'dayjs'
import {formatDate} from '../utils/date'
import { useTypedSelector } from '../hooks/useTypesSelector'


interface EventFormProps{
    guests : IUser[];
    submit : (event : IEvent) => void
}

const EventForm:React.FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author : '',
        date : '',
        guest : '',
        description : ''
    } as IEvent)

    const {user} = useTypedSelector(state => state.auth)        

    const submitEvent = () =>  {   
        props.submit({...event, author : user.username})         
    }

    const selectDate = (date: Dayjs | null)  => {        
        if(date){
            setEvent({...event, date : formatDate(date.toDate())})            
        }
    }
    
  return (
    <Form onFinish={submitEvent}>
          <Form.Item
            label="описание события"
            name=" события"
            rules={[rules.required()]}
          >
          <Input 
            onChange={(e) => setEvent({...event, description : e.target.value})}  
            value={event.description}            
          />
        </Form.Item>
        <Form.Item
            label="описание даты"
            name="дата"
            rules={[rules.required()]}
        >
            <DatePicker  
                onChange={(date) => selectDate(date)}
            />
        </Form.Item>
        <Form.Item
            label="выбор гостя"
            name="гость"
            rules={[rules.required()]}
        >
            <Select onChange={(guest : string) =>setEvent({...event, guest})}>
                {
                    props.guests.map(guest => 
                        <Select.Option 
                            key={guest.username}
                            value={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    )
                }   
            </Select>
                
            
        </Form.Item>
        <Row justify='end'>
            <Form.Item>
                <Button type="primary" htmlType='submit'>Сохранить событие</Button>
            </Form.Item>
        </Row>
      
    </Form>
  )
}

export default EventForm

/*
[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]
 */