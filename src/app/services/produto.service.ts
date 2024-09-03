import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:3500/animal';
  private apiUrl4 = 'http://localhost:3500/animal2';
  private apiUrl2 = 'http://localhost:3500/animal4';
  constructor(private http: HttpClient) { }

  adicionarProduto(produto: any): Observable<any> {
    return this.http.post(this.apiUrl, produto).pipe(
      map(response => response),
      catchError(error => {
        console.error('Erro ao adicionar produto:', error);
        return throwError(() => new Error('Erro ao adicionar produto'));
      })
    );
  }

  getAnimalById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl4}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Erro ao buscar animal por ID:', error);
        return throwError(() => new Error('Erro ao buscar animal por ID'));
      })
    );
  }

  updateAnimal(id: number, animal: any): Observable<any> {
    return this.http.put(`${this.apiUrl2}/${id}`, animal).pipe(
      map(response => response),
      catchError(error => {
        console.error('Erro ao atualizar animal:', error);
        return throwError(() => new Error('Erro ao atualizar animal'));
      })
    );
  }
}
