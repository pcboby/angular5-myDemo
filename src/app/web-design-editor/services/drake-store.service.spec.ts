/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrakeStoreService } from './drake-store.service';

describe('Service: DrakeStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrakeStoreService]
    });
  });

  it('should ...', inject([DrakeStoreService], (service: DrakeStoreService) => {
    expect(service).toBeTruthy();
  }));
});