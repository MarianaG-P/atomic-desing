import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() src = '';
  @Input() height = 'auto';
  @Input() width = 'auto';
  @Input() alt = '';
}
