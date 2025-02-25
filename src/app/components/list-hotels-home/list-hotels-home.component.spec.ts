import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelsHomeComponent } from './list-hotels-home.component';

describe('ListHotelsHomeComponent', () => {
  let component: ListHotelsHomeComponent;
  let fixture: ComponentFixture<ListHotelsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHotelsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHotelsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
