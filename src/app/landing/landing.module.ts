import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillHexagonComponent } from './skill-hexagon/skill-hexagon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent
  ],
  declarations: [
    SkillsComponent,
    LandingComponent,
    SkillHexagonComponent
  ]
})
export class LandingModule { }
