import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-atualizar-animal',
  templateUrl: './atualizar-animal.component.html',
  styleUrls: ['./atualizar-animal.component.css']
})
export class AtualizarAnimalComponent implements OnInit {
  formulario!: FormGroup;
  animalId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private animalService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.animalId = +this.route.snapshot.params['id']; 
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],
      especie: ['', Validators.required],
      nomedono: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)*$/)]],
      emaildono: ['', [Validators.required, Validators.email]]
    });

    this.animalService.getAnimalById(this.animalId).subscribe(
      (animal) => {
        this.formulario.patchValue({
          nome: animal.nome,
          especie: animal.especie,
          nomedono: animal.nomedono,
          emaildono: animal.emaildono
        });
      },
      (error) => {
        console.error('Erro ao buscar o animal', error);
      }
    );
}


onSubmit(): void {
  if (this.formulario.valid) {
    this.animalService.updateAnimal(this.animalId, this.formulario.value).subscribe(
      (response) => {
        Swal.fire('Sucesso', 'Animal atualizado com sucesso!', 'success').then(() => {
          this.router.navigate(['/listapets']); 
        });
      },
      (error) => {
        console.error('Erro ao atualizar o animal', error);
        Swal.fire('Erro', 'Ocorreu um erro ao atualizar o animal.', 'error');
      }
    );
  } else {
    Swal.fire('Atenção', 'Por favor, preencha o formulário corretamente.', 'warning');
  }
}
}
