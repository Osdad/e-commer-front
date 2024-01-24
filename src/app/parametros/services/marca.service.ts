import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { IMarca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  private baseUrl: string = environments.baseUrl;
  private readonly http = inject(HttpClient);

  getMarcas(): Observable<IMarca[]> {
    const url = `${this.baseUrl}/marcas`;
    return this.http.get<IMarca[]>(url);
  }

  createMarca(body: IMarca): Observable<IMarca> {
    const url = `${this.baseUrl}/marcas/crear`;
    //const body = { nombre };
    return this.http.post<IMarca>(url, body);
  }

  constructor() {}
}
