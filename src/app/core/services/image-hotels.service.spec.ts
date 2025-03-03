import { TestBed } from '@angular/core/testing';

import { ImageHotelsService } from './image-hotels.service';

describe('ImageHotelsService', () => {
  let service: ImageHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
