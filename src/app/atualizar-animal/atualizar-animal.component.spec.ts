import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAnimalComponent } from './atualizar-animal.component';

describe('AtualizarAnimalComponent', () => {
  let component: AtualizarAnimalComponent;
  let fixture: ComponentFixture<AtualizarAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizarAnimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
