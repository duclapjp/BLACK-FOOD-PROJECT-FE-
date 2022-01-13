import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDeleteFoodComponent } from './restaurant-delete-food.component';

describe('RestaurantDeleteFoodComponent', () => {
  let component: RestaurantDeleteFoodComponent;
  let fixture: ComponentFixture<RestaurantDeleteFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDeleteFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDeleteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
