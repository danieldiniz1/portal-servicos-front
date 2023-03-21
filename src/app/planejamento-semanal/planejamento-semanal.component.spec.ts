import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoSemanalComponent } from './planejamento-semanal.component';

describe('PlanejamentoSemanalComponent', () => {
  let component: PlanejamentoSemanalComponent;
  let fixture: ComponentFixture<PlanejamentoSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoSemanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
