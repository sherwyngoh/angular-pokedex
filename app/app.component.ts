import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <h1>{{title}}</h1>
  <div class="pace pace-activity"></div>
  <pokemon-master></pokemon-master>
  `
})

export class AppComponent {
  title = "Pokemon";
}