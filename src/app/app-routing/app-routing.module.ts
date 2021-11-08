import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { ReadMessagesComponent } from '../messages/read-messages/read-messages.component';
import { WriteMessagesComponent } from '../messages/write-messages/write-messages.component';

const appRoutes:Routes=[
  {
    path:'auth', 
    component:AuthComponent
  },
  {
    path:'', 
    component:DashboardComponent, 
    canActivate:[AuthGuard]
  },
  {
    path: 'read-messages',
    component:ReadMessagesComponent
  },
  {
    path: 'write-messages',
    component:WriteMessagesComponent,
    canActivate:[AuthGuard]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
