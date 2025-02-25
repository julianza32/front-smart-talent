import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInfoHotelsComponent } from './container-info-hotels.component';

describe('ContainerInfoHotelsComponent', () => {
  let component: ContainerInfoHotelsComponent;
  let fixture: ComponentFixture<ContainerInfoHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerInfoHotelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInfoHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
