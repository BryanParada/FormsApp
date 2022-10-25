import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: '**', redirectTo: 'registration'}

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], 
})
export class AuthRoutingModule { }
