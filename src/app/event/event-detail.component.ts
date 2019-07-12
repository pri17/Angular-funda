import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from 'protractor';

@Component({
    selector: 'event-detail',
    template:`<div class= "well hoverwell thumbnail">

    <h2> {{eventx?.name}}</h2>

    <div>
      Date: {{eventx?.date}}
    </div>

    <div [ngClass]="getstartTimeClass()"  [ngSwitch] = "eventx?.time">
      Time: {{eventx?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>

    <div>
      Price: {{eventx?.price}}
    </div>
    
    <div *ngIf="eventx?.location">
      <span> Location:{{eventx?.location?.address}}</span>
      <span class ="pad-left">{{eventx?.location?.city}}, {{eventx?.location?.country}} </span>
    </div>
  </div>`,
  styles:[`
    .green {color:#003300 !important; }
    .thumbnail {min-height:210px;}
    .pad-left {margin-left:10px;}
    .well div { color:#bbb;}
    .bold {font-weight:bold;}
  `]
})

export class EventDetailComponent {
    @Input() eventx: any

    someproperty:any = "some values"

    logfoo(){
      console.log("foo");
    }

    getstartTimeClass(){
      const isEarly = this.eventx && this.eventx.time === '8:00 am';
      return {green:isEarly, bold: isEarly}
    }
}



