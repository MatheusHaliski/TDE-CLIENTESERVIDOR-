import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listapets',
  templateUrl: './listapets.component.html',
  styleUrls: ['./listapets.component.css']
})
export class ListapetsComponent implements OnInit {
  animal: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.carregarAnimais();
  }

  carregarAnimais(): void {
    this.http.get<any[]>('http://localhost:3500/animal2').subscribe(
      data => {
        this.animal = data;
      },
      error => {
        console.error('Erro ao carregar os animais:', error);
      }
    );
  }

  atualizarAnimal(id: number): void {
    this.router.navigate(['/atualizar-animal', id]);
  }

  deletarAnimal(id: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:3500/animal5/${id}`).subscribe(
          () => {
            Swal.fire(
              'Deletado!',
              'O animal foi deletado com sucesso.',
              'success'
            );
            this.carregarAnimais(); 
          },
          error => {
            console.error('Erro ao deletar o animal:', error);
            Swal.fire(
              'Erro!',
              'Não foi possível deletar o animal.',
              'error'
            );
          }
        );
      }
    });
  }
}
