import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style.backgroundColor]="progressColor"
        [style.width]="progress + '%'"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }
      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent {
  @Input() set progress(val: number) {
    // có thể chạy validation for validation
    // cái hàm set Input sẽ chạy lại khi giá trị thay đổi
    if (typeof val !== 'number') {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    }
    this._progress = val;
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  // không nên sử dụng ngOnInit để làm validation và có thể sử dụng ngOnChanges để validation ngoài ra còn 1 cách để validation là dùng setter Input
}
