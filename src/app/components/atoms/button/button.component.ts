import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() matButton: boolean = false
  @Input() flatButton: boolean = false
  @Input() button: boolean = false
  @Input() typeButton: string = '';
  @Input() styleButton: string = 'customButton';
  @Input() text: string = '';
  @Input() bgColor = 'transparent';
  @Input() color = '000';
  @Input() borderRadius = '0';
  @Input() borderButton = '';
  @Input() fontSize = '';
  @Input() width = '';
  @Input() height = '';
  @Input() value = '';
  @Input() padding = '0.5rem 1rem';

}


