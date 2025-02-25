import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInfoRoomsComponent } from './container-info-rooms.component';

describe('ContainerInfoRoomsComponent', () => {
  let component: ContainerInfoRoomsComponent;
  let fixture: ComponentFixture<ContainerInfoRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerInfoRoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInfoRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
