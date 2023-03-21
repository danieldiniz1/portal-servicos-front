import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacaoComponent } from './certificacao.component';

describe('CertificacaoComponent', () => {
  let component: CertificacaoComponent;
  let fixture: ComponentFixture<CertificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
