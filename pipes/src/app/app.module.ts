import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesDirective } from './directives.directive';
import { Pipe1Pipe } from './pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDirective,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
