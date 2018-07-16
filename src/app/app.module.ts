import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
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
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index'

import {JQ_TOKEN,
TOASTR_TOKEN,
Toastr,
CollapsibleWellComponent,
simpleModalComponent,
ModalTriggerDirective
} from './common/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { AuthService, } from './user/auth.service';


let toastr: Toastr = window['toastr']
let jQuery = window['$']


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
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
    DurationPipe,
    simpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN,useValue:toastr},
    EventRouteActivator,
    AuthService,
    VoterService,
    {provide:JQ_TOKEN,useValue:jQuery},
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
