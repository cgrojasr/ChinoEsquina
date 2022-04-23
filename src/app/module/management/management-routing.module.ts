import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductoHomeComponent } from './producto/producto-home/producto-home.component';
import { ProductoManagementComponent } from './producto/producto-management/producto-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: "",
    children: [
      { 
        path: 'home',
        component: HomeComponent
      },
      { 
        path: 'producto',
        component: ProductoHomeComponent
      },
      { 
        path: 'producto/:page',
        component: ProductoHomeComponent
      },
      { 
        path: 'productomanagement',
        component: ProductoManagementComponent
      },
      { 
        path: 'productomanagement/:id',
        component: ProductoManagementComponent
      },
      { 
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagementRoutingModule { }
