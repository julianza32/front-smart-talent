import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReservationsComponent } from './form-reservations.component';

describe('FormReservationsComponent', () => {
  let component: FormReservationsComponent;
  let fixture: ComponentFixture<FormReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
