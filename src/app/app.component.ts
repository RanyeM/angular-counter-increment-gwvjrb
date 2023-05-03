import { Component } from '@angular/core';
import countapi from 'countapi-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  constructor () {}

  counter = 0;

  increment() {
    this.counter++;
  }  

}
