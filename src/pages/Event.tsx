import React,{useState, useEffect} from 'react'
import EventCalendar from '../components/EventCalendar'
import { Button, Layout, Modal, Row } from 'antd'
import EventForm from '../components/EventForm'
import {useDispatchHook} from '../hooks/useDispatchHook'
import { useTypedSelector } from '../hooks/useTypesSelector'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'

const Event = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {fetchGuests,createEvent,fetchEvents} = useDispatchHook()
  const {guests,events} = useTypedSelector(state => state.event)
  const {user} = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username)
  },[])

  const addNewEvent = (e : IEvent) => {
    setIsModalOpen(false)
    createEvent(e)
  }

  return (
    <Layout>     
      <div>{JSON.stringify(events)}</div> 
      <EventCalendar events={events} />
      <Row justify='center'>
        <Button onClick={() => setIsModalOpen(true)}
        >
          Добавить событие
        </Button>
      </Row>
      <Modal 
        title='Добавить событие'
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <EventForm 
          guests={guests}
          submit={(event : IEvent) => addNewEvent(event)}
        />
      </Modal>
    </Layout>
  )
}

export default Event