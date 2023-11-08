import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent {
  @Input() text = '';
  @Input() color = '000';
  constructor() { }
}
