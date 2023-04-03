import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVivoComponent } from './dados-vivo.component';

describe('DadosVivoComponent', () => {
  let component: DadosVivoComponent;
  let fixture: ComponentFixture<DadosVivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosVivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
