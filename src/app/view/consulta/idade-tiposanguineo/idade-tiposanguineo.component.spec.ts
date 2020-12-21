import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadeTiposanguineoComponent } from './idade-tiposanguineo.component';

describe('IdadeTiposanguineoComponent', () => {
  let component: IdadeTiposanguineoComponent;
  let fixture: ComponentFixture<IdadeTiposanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdadeTiposanguineoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdadeTiposanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
