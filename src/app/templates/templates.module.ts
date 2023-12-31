import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrganismsModule } from '../components/organisms/organisms.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class TemplatesModule { }
