import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CambiarClaveComponent } from './pages/cambiar-clave/cambiar-clave.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { HomeSecurity } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { RemoveUserComponent } from './components/user/remove-user/remove-user.component';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

@NgModule({
  declarations: [
    CambiarClaveComponent,
    EditUserComponent,
    HomeSecurity,
    LoginComponent,
    LogoutComponent,
    RecuperarClaveComponent,
    RemoveUserComponent,
    UserCreateComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SeguridadRoutingModule],
})
export class SeguridadModule {}
