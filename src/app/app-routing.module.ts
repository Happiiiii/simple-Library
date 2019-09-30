import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditblogComponent } from './editblog/editblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'editblog/:id',
    component : EditblogComponent
  },
  {
    path : 'viewblog',
    component : ViewblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
