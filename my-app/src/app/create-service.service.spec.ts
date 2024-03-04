import { TestBed } from '@angular/core/testing';

import { CreateServiceService } from './create-service.service';

interface Test{

}

describe('CreateServiceService', () => {
  let service: CreateServiceService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
