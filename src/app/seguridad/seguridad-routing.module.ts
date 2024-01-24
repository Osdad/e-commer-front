import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CambiarClaveComponent } from './pages/cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './pages/recuperar-clave/recuperar-clave.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeSecurity } from './pages/home/home.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { RemoveUserComponent } from './components/user/remove-user/remove-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSecurity,
  },
  { path: 'login', component: LoginComponent },
  { path: 'change', component: CambiarClaveComponent },
  { path: 'recuperar', component: RecuperarClaveComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'crear-usuario', component: UserCreateComponent },
  { path: 'editar-usuario', component: EditUserComponent },
  { path: 'eliminar-usuario', component: RemoveUserComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
