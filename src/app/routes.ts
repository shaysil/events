import {Routes} from '@angular/router'
import { Error404Component } from './errors/404.component';


import {EventsListComponent,
        EventsDetailsComponent,
        createEventComponent,
        EventRouteActivator,
        EventListResolver
} from './events/index'



export const appRoutes:Routes = [
    {path: 'events',component:EventsListComponent,resolve:{events:EventListResolver}},
    {path:'events/new',component:createEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events/:id',component:EventsDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},
    {path: '',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'}
    
]