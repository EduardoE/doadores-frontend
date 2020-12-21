import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcDoadoresComponent } from './imc-doadores.component';

describe('ImcDoadoresComponent', () => {
  let component: ImcDoadoresComponent;
  let fixture: ComponentFixture<ImcDoadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcDoadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcDoadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
