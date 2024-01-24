import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../interfaces/login.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl: string = environments.baseUrl;
  private readonly http = inject(HttpClient);
  constructor() {}

  login(email: string, password: string): Observable<ILogin> {
    const url = `${this.baseUrl}/auth/login`;
    const body: ILogin = { correo: email, clave: password };
    return this.http.post<ILogin>(url, body);
  }
}
