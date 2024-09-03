import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapetsComponent } from './listapets.component';

describe('ListapetsComponent', () => {
  let component: ListapetsComponent;
  let fixture: ComponentFixture<ListapetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListapetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
