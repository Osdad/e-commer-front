import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  public formLogin: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { usuario, clave } = this.formLogin.value;
    this.loginService.login(usuario, clave).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
    console.log('ey funciono');
  }
  constructor() {}
}
