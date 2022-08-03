import { TestBed } from '@angular/core/testing';

import { XinjiangdataService } from './xinjiangdata.service';

describe('XinjiangdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XinjiangdataService = TestBed.get(XinjiangdataService);
    expect(service).toBeTruthy();
  });
});
