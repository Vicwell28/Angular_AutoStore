import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraClientComponent } from './compra-client.component';

describe('CompraClientComponent', () => {
  let component: CompraClientComponent;
  let fixture: ComponentFixture<CompraClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
