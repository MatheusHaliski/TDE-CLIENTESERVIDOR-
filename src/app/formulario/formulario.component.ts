import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.formulario = this.fb.group({
      nome: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-z]+$/)] 
      ],
      especie: [
        '',
        [Validators.required] 
      ],
      nomedono: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/)]
      ],
      emaildono: [
        '',
        [Validators.required, Validators.email] 
      ]
    });
  }

  onSubmit() {
    if (this.formulario.invalid) {
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, corrija os erros no formulário antes de enviar.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    if (this.formulario.valid) {
;
      this.produtoService.adicionarProduto(this.formulario.value).subscribe(
        response => {
          console.log('Produto adicionado com sucesso:', response);
        },
        error => {
          console.error('Erro ao adicionar produto:', error);
        }
      )
      Swal.fire({
        title: 'Sucesso!',
        text: 'Os dados foram enviados com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.formulario.reset(); 
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
