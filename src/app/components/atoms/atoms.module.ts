import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from 'src/app/material/material.module';
import { IconComponent } from './icon/icon.component';
import { ImgComponent } from './img/img.component';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    IconComponent,
    ImgComponent,
    HyperlinkComponent,
    TextComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputComponent,
    IconComponent,
    ImgComponent,
    HyperlinkComponent,
    TextComponent,
  ]
})
export class AtomsModule { }
