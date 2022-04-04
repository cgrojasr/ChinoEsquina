import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//Agregado por pciscroj
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { ProductoService } from './core/producto/producto.service';
import { ProductoHomeComponent } from './producto/producto-home/producto-home.component';
import { ProductoManagementComponent } from './producto/producto-management/producto-management.component';
import { MenubarComponent } from './shared/menubar/menubar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductoHomeComponent,
    ProductoManagementComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
