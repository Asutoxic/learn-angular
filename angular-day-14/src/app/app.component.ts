import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day-14';
  counter = 1;
  navs = ['Active', 'Link 1', 'Link 2', 'Disabled']
}
