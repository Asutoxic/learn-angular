import { Component, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'tabs',
  template: `<ul class="nav nav-tabs mx-4 my-4">
  <li class="nav-item" *ngFor="let link of navs">
    <a class="nav-link active" aria-current="page" href="#">
      <ng-container *ngIf="linkTemplate;else noTeamplate">
        <ng-container *ngTemplateOutlet="linkTemplate; context:{$implicit:link}"></ng-container>
      </ng-container>
      <ng-template #noTeamplate>{{ link }}</ng-template>
    </a>
  </li>
</ul>`
})
export class TabComponent {
  @Input() navs: string[] | undefined;
  @Input() linkTemplate: TemplateRef<any> | undefined;
}
