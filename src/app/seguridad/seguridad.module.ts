import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CambiarClaveComponent } from './components/cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';

@NgModule({
  declarations: [
    LoginComponent,
    CambiarClaveComponent,
    RecuperarClaveComponent,
  ],
  imports: [CommonModule, SeguridadRoutingModule],
})
export class SeguridadModule {}
