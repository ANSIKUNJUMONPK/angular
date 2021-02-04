import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2> hi {{name}}</h2>
  <h2>{{"welcome"+ name}}</h2>
  <h2>{{name.toUpperCase()}}<h2>
  <h2>{{siteUrl}}</h2>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name="Ansi"
 siteUrl=window.location.href
}
