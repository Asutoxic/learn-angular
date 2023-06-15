import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  imgURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr79HI9DZxr4sY9dLi_aFqE3NS7jSby6ltNe3DBSdpw&s';

  images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr79HI9DZxr4sY9dLi_aFqE3NS7jSby6ltNe3DBSdpw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr79HI9DZxr4sY9dLi_aFqE3NS7jSby6ltNe3DBSdpw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr79HI9DZxr4sY9dLi_aFqE3NS7jSby6ltNe3DBSdpw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr79HI9DZxr4sY9dLi_aFqE3NS7jSby6ltNe3DBSdpw&s',
  ]

  cost = 2000;

  temperature = 25.345;

  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };

  blueClass = false;

  fontSize = 16;

  currentDate = new Date();

  user = {
    name: 'Vũ',
    age: 27,
  };

  handler(event: any) {
    console.log('clicked', event);
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: String) {
    console.log(event);
  }
}
