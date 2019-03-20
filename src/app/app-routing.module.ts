import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderentryformComponent } from './orderentryform/orderentryform.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { SearchComponent } from './search/search.component'
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth.guard';
import {SigninComponent} from './signin/signin.component'
import { CartComponent } from './cart/cart.component';
import {OrderconfirmationComponent} from './orderconfirmation/orderconfirmation.component';

const routes: Routes = [
  {path: 'neworderform', component: OrderentryformComponent,canActivate:[AuthGuard]},
  {path:'cart', component:CartComponent },
  {path:'edit/:id', component:OrderentryformComponent,canActivate:[AuthGuard] },
  {path: 'home', component:  HomeComponent},
  {path: 'signin', component:  SigninComponent},
  {path:'orderconfirmation',component: OrderconfirmationComponent},
  {path: 'dashboard', component:  SearchComponent,canActivate:[AuthGuard]  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})    
export class AppRoutingModule { }
