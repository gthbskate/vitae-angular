import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ContactComponent } from './contact/contact.component'; 
import { CoursesComponent } from './courses/courses.component';
import { DevelopComponent } from './develop/develop.component';
import { ExperienceComponent } from './experience/experience.component';
import { SchoolComponent } from './school/school.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { 
    path: '', 
    component: PrincipalComponent
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  {
    path: 'courses', 
    component:  CoursesComponent      
  },
  {
    path: 'develop',
    component: DevelopComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
