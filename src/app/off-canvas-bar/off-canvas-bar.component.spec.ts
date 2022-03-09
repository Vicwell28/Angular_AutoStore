import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasBarComponent } from './off-canvas-bar.component';

describe('OffCanvasBarComponent', () => {
  let component: OffCanvasBarComponent;
  let fixture: ComponentFixture<OffCanvasBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffCanvasBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
