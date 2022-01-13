import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDeleteComponent } from './restaurant-delete.component';

describe('RestaurantDeleteComponent', () => {
  let component: RestaurantDeleteComponent;
  let fixture: ComponentFixture<RestaurantDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
