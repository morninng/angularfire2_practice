/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BusinessService } from './business.service';

describe('Business Service', () => {
  beforeEachProviders(() => [BusinessService]);

  it('should ...',
      inject([BusinessService], (service: BusinessService) => {
    expect(service).toBeTruthy();
  }));
});

export interface Business {
  $key?: string;
  Category?: string;
  city?: string;
  company?: string;
  description?: string;
}
