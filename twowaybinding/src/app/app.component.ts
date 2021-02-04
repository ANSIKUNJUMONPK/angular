import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>data binding</h1>
  <input [(ngModel)]="name" type="text">
  {{name}}
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name="";
}
