import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input() text:string = '';
  @Input() fontSize:string = '1rem';
  @Input() fontFamily:string = '';
  @Input() fontWeight:string = '';
  @Input() color:string = '#000';
  @Input() align:string = '';
  @Input() margin:string = '';
  @Input() class:string = '';
  @Input() width:string = '';
}
