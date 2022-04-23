import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoManagementComponent } from './producto-management.component';

describe('ProductoManagementComponent', () => {
  let component: ProductoManagementComponent;
  let fixture: ComponentFixture<ProductoManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
