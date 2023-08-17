import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface IEventState{
    guests : IUser[];
    events : IEvent[]
}

export enum EventActinsEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS'
}

export interface SetGuestAction{
    type : EventActinsEnum.SET_GUESTS,
    payload : IUser[]
}

export interface SetEventAction{
    type : EventActinsEnum.SET_EVENTS,
    payload : IEvent[]
}

export type EventAction = SetGuestAction | SetEventAction;