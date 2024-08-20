import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicoComponent } from './fico.component';

describe('FicoComponent', () => {
  let component: FicoComponent;
  let fixture: ComponentFixture<FicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
