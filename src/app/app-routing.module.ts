import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }      from './dashboard/dashboard.component';
//import { HeroesComponent }      from './heroes/heroes.component';
import { UsersComponent }      from './users/users.component';
import { ItemsComponent }      from './items/items.component';
//import { HeroDetailComponent }      from './hero-detail/hero-detail.component';
import { UserDetailComponent }      from './user-detail/user-detail.component';
import { ItemDetailComponent }      from './item-detail/item-detail.component';

const routes: Routes = [
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // untuk menambahkan default routing pada saat dibuka pertama kali
//  { path: 'heroes', component: HeroesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'itemdetail/:id', component: ItemDetailComponent },
//  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}