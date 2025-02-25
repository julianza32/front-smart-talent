import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInfoReservationComponent } from './container-info-reservation.component';

describe('ContainerInfoReservationComponent', () => {
  let component: ContainerInfoReservationComponent;
  let fixture: ComponentFixture<ContainerInfoReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerInfoReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInfoReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
