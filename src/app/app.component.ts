import { Component } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public editSettings!: EditSettingsModel;
  title = 'ZeptoMart';
}
