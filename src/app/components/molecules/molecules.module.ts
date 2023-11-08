import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { AtomsModule } from '../atoms/atoms.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TextCardComponent } from './text-card/text-card.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LinkListComponent,
    TextCardComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AtomsModule
  ],
  exports:[
    LoginFormComponent,
    LinkListComponent,
    TextCardComponent
  ]
})
export class MoleculesModule {
}
