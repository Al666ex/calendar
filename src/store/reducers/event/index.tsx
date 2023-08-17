
import {EventActinsEnum,EventAction,IEventState} from './eventType'

const initState:IEventState = {
    events : [],
    guests : []
}

export default function eventReducer(state = initState, action:EventAction):IEventState{
    switch(action.type){
        case EventActinsEnum.SET_EVENTS :
            return {...state, events : action.payload}
        case EventActinsEnum.SET_GUESTS : 
            return {...state, guests : action.payload}
        
        default :
            return state
    }
}