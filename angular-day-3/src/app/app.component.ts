import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  angular = 'Angular' + VERSION.major;

  user = {
    name: 'Vu Tran',
    age: '27',
  };

  handler(event: Object) {
    console.log('click', event);
  }
}
