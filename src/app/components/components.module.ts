import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { OrganismsModule } from './organisms/organisms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    OrganismsModule
  ]
})
export class ComponentsModule { }
