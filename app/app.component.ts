import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <h1>{{title}}</h1>
  <hero-master></hero-master>
  `
})

export class AppComponent {
  title = "Tour of Heroes";
}