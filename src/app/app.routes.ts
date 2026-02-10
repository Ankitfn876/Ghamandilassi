import { Routes } from '@angular/router';

export const routes: Routes = [
{ path: '', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  { path: 'franchise', loadComponent: () => import('./franchise/franchise.component').then(c => c.FranchiseComponent) },
  { path: 'contact', loadComponent: () => import('./contact-us/contact-us.component').then(c => c.ContactUsComponent) },
  { path: '**', loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) }
];
