import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import{EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  createEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    createEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }, 
    EventListResolver

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: createEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saved this event, do tou really want to cancel?')
  }
  return true
}
