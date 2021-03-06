import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list.component';
import { EventDetailComponent } from './event/event-detail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './event/shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ EventService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
