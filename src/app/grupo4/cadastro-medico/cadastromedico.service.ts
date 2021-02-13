import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from './cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastromedicoService {

  constructor(private http : HttpClient) { 

  }

  private readonly API = 'http://localhost:8080/cadastroMedico';

  private readonly APII = 'http://localhost:8080/medico';

  getDadosCadastro() {
    return this.http.get(this.API);
  }
  
  createCadastro(request: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.APII, request);
  }
}
