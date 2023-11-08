import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input()
  public label: string = '';
}
