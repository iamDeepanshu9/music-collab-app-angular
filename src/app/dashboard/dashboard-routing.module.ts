import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import { MyBooksComponent } from './my-songs/my-books.component';
import { ExchangeScreenComponent } from './exchange-screen/exchange-screen.component';
import { ProfileComponent } from '../profile/profile.component';
// import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path:'',
        component: ExchangeScreenComponent,
      },
      {
        path:'profile',
        component: ProfileComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
