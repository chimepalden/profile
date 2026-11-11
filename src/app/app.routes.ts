import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./pages/resume.component').then((m) => m.ResumeComponent),
  },
  {
    path: 'resume/academicprojects',
    loadComponent: () =>
      import('./pages/education.component').then((m) => m.EducationComponent),
  },
  {
    path: 'resume/courses',
    loadComponent: () =>
      import('./pages/education.component').then((m) => m.EducationComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
