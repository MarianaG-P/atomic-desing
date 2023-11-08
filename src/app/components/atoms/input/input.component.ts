import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() inputType: string = '';
    @Input() placeholder: string = '';
    @Input() showIcon: boolean = false;
}
