import { Component } from '@angular/core';

@Component({
  selector: 'atom-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  public show: boolean = true;
  public icon: string = '';

}
