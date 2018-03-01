/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditorStoreService } from './editor-store.service';

describe('Service: EditorStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorStoreService]
    });
  });

  it('should ...', inject([EditorStoreService], (service: EditorStoreService) => {
    expect(service).toBeTruthy();
  }));
});