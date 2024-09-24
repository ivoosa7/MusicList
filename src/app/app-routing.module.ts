import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicTableComponent } from './music-table/music-table.component';
import { MusicFormComponent } from './music-form/music-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/musics', pathMatch: 'full'},
  { path: 'musics', component: MusicTableComponent},
  { path: 'music/:id', component:MusicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
