import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>{{name |uppercase}}</h2>
  <h2>{{name |lowercase}}</h2>
  <h2>{{message |titlecase}}</h2>
  <h2>{{name |slice:3:5}}</h2>
  <h2>{{person |json}}</h2>
  <h2>{{5.678 |number:'1.2-3'}}</h2>
  <h2>{{0.25 |percent}}</h2>
  <h2>{{0.25 |currency}}</h2>
  <h2>{{0.25 |currency:'INR'}}</h2>
  <h2>{{date |date:'short'}}</h2>
  <h2>{{date |date:'shortDate'}}</h2>
  
  <h2>{{date |date:'shortTime'}}</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="angular"
message="welcome to angular"
person={"firstname":"ansi","lastname":"kunjumon"}

 date = new Date(); 
}