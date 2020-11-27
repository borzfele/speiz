import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListPageComponent } from './pages/shopping-list-page/shopping-list-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
