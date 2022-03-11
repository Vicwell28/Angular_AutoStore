import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehiculosComponent } from './show-vehiculos.component';

describe('ShowVehiculosComponent', () => {
  let component: ShowVehiculosComponent;
  let fixture: ComponentFixture<ShowVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
