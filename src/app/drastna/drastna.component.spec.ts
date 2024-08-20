import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrastnaComponent } from './drastna.component';

describe('DrastnaComponent', () => {
  let component: DrastnaComponent;
  let fixture: ComponentFixture<DrastnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrastnaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrastnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
