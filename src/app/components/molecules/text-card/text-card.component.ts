import { Component, Input } from '@angular/core';

@Component({
  selector: 'molecule-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent {
  @Input()
  public class: string = '';
  @Input()
  public classButton: string = '';
  @Input()
  public title: string = '';
  @Input()
  public subtitle: string = '';
  @Input()
  public fontSizeTitle: string = '';
  @Input()
  public fontFamily: string = '';
  @Input()
  public fontWeight: string = '';
  @Input()
  public fontSizeSubtitle: string = '';
  @Input()
  public colorTitle: string = '';
  @Input()
  public colorSubtitle: string = '';
  @Input()
  public textButton: string = '';
}
