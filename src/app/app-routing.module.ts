import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: 'chime',
    children: [
      { path: '', component: HomeComponent},
      { path: 'resume',
        children: [
          {path: '', component: ResumeComponent},
          {path: 'academicprojects', component: EducationComponent},
          {path: 'courses', component: EducationComponent}
        ]
      },
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'about', component: AboutComponent},
    ]
  },
  { path: '', redirectTo: 'chime', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
