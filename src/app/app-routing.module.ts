import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule' },
  { path: 'available-subjects', loadChildren: './subject/available-subjects/available-subjects.module#AvailableSubjectsPageModule' },
  { path: 'home', loadChildren: './home/home/home-page.module#HomePageModule' },
  { path: 'subjects/:subjectId', loadChildren: './subject/subject/subject.module#SubjectPageModule' },
  { path: 'my-subjects', loadChildren: './subject/my-subjects/my-subjects.module#MySubjectsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
