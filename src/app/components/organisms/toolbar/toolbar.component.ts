import { Component } from '@angular/core';

@Component({
  selector: 'organism-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  public links: Array<string> = ['Home', 'Login', 'Sing Up' ]
}
