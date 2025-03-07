import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHotelComponent } from './form-hotel.component';

describe('FormHotelComponent', () => {
  let component: FormHotelComponent;
  let fixture: ComponentFixture<FormHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
