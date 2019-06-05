import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule' },
  { path: 'available-subjects', loadChildren: './subject/available-subjects/available-subjects.module#AvailableSubjectsPageModule' },
  { path: 'home2', loadChildren: './home2/home2/home2.module#Home2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
