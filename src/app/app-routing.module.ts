import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoHomeComponent } from './producto/producto-home/producto-home.component';
import { ProductoManagementComponent } from './producto/producto-management/producto-management.component';

const routes: Routes = [
  { path: 'producto', component: ProductoHomeComponent},
  { path: 'producto/:page', component: ProductoHomeComponent},
  { path: 'productomanagement', component: ProductoManagementComponent},
  { path: 'productomanagement/:id', component: ProductoManagementComponent},
  { path: 'management', loadChildren: ()=> import('./module/management/management.module').then(m=>m.ManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductoHomeComponent, ProductoManagementComponent]
