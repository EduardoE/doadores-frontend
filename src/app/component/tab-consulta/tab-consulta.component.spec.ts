import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConsultaComponent } from './tab-consulta.component';

describe('TabConsultaComponent', () => {
  let component: TabConsultaComponent;
  let fixture: ComponentFixture<TabConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
