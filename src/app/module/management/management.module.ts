import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoHomeComponent } from './producto/producto-home/producto-home.component';
import { ProductoManagementComponent } from './producto/producto-management/producto-management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ProductoHomeComponent,
    ProductoManagementComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
