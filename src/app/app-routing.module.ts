import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent, },
  { path: 'server', component: ServerInfoComponent, },
  { path: 'fyrenet', component: ServerInfoComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
