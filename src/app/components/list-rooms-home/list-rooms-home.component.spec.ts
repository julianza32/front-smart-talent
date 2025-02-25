import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoomsHomeComponent } from './list-rooms-home.component';

describe('ListRoomsHomeComponent', () => {
  let component: ListRoomsHomeComponent;
  let fixture: ComponentFixture<ListRoomsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRoomsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRoomsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
