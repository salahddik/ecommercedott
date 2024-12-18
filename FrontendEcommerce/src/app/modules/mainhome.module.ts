import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { CallproductsService } from '../shared/service/callproducts.service';
import { HttpClientModule  } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MainhomeComponent
  }
];

@NgModule({
  declarations: [
    MainhomeComponent // Declare your component here
  ],
  providers: [
    HttpClientModule,
    CallproductsService
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes) // Add routes to this module
  ]
})
export class MainhomeModule { }
