import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainModalComponent } from './contain-modal.component';

describe('ContainModalComponent', () => {
  let component: ContainModalComponent;
  let fixture: ComponentFixture<ContainModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
