import {
  Component,
  ElementRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('toggleComp') toggleComp: ToggleComponent | undefined;
  @ViewChild(ToggleComponent, { static: true }) toggleComp:
    | ToggleComponent
    | undefined;

  @ViewChild('toggleButton', { static: true })
  toggleBtn: ElementRef<HTMLButtonElement> | undefined;
  name = 'Angular ' + VERSION.major;

  @ViewChild('nameInput', { static: true }) nameInput:
    | ElementRef<HTMLInputElement>
    | undefined;
  isChecked = true;

  ngOnInit() {
    setTimeout(() => {
      this.nameInput?.nativeElement.focus();
    }, 3000);

    console.log('onInit', this.toggleComp, this.toggleBtn);
  }

  ngAfterViewInit() {
    console.log(this.toggleComp);
  }
}
