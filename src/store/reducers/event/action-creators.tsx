
import axios from 'axios'
import { AppDispatch } from '../..'
import {IEvent} from '../../../models/IEvent'
import { IUser } from '../../../models/IUser'
import {EventAction,EventActinsEnum,SetGuestAction,SetEventAction} from './eventType'
import UseService from '../../../api/UseService'

export const EventActionCreators = {
    setEvents : (payload : IEvent[]) : SetEventAction => ({type : EventActinsEnum.SET_EVENTS, payload}),
    setGuests : (payload : IUser[]) : SetGuestAction => ({type : EventActinsEnum.SET_GUESTS, payload}),
    fetchGuests : ()=> async(dispatch : AppDispatch) => {
        try {
            //const response = await axios.get('./users.json')  
            const response = await UseService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (error) {
            console.log('could not download guests')
        }
    },
    createEvent : (event : IEvent) => async (dispatch : AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))            
        } catch (error) {
            console.log(error)            
        }
    },
    fetchEvents : (user : string) => async (dispatch : AppDispatch) => {
        try {            
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(ev => ev.author === user || ev.guest === user)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (error) {
            console.log(error)
        }

    }
    
}