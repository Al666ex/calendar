import Event from '../pages/Event'
import Login from '../pages/Login';

interface IRoute{
    path : string;
    element : React.ComponentType
}

export enum RouteNames {
    login = '/login',
    event = '/'
    
}

export const publicRoutes:IRoute[] = [
    {path : RouteNames.login, element : Login}    
]

export const privateRoutes:IRoute[] = [
    {path : RouteNames.event, element : Event}    
]