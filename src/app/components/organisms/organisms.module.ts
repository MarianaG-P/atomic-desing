import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InfoSectionComponent } from './info-section/info-section.component';


@NgModule({
  declarations: [
    LoginComponent,
    ToolbarComponent,
    InfoSectionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MoleculesModule,
    AtomsModule
  ],
  exports:[
    LoginComponent,
    ToolbarComponent,
    InfoSectionComponent,
  ]
})
export class OrganismsModule { }
