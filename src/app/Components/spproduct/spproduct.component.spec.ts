import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPproductComponent } from './spproduct.component';

describe('SPproductComponent', () => {
  let component: SPproductComponent;
  let fixture: ComponentFixture<SPproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SPproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
