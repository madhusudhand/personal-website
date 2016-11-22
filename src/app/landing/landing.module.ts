import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent
  ],
  declarations: [
    SkillsComponent,
    LandingComponent
  ]
})
export class LandingModule { }
