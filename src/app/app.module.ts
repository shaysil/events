import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  createEventComponent,
  EventRouteActivator,
  EventListResolver,
  EditEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN ,Toastr} from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { AuthService, } from './user/auth.service';


declare let toastr: Toastr

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    createEventComponent,
    Error404Component,
    EditEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN,useValue:toastr},
    EventRouteActivator,
    AuthService,
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
