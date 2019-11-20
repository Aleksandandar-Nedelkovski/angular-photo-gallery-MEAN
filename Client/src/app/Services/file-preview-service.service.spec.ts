import { TestBed } from '@angular/core/testing';

import { FilePreviewServiceService } from './file-preview-service.service';

describe('FilePreviewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilePreviewServiceService = TestBed.get(FilePreviewServiceService);
    expect(service).toBeTruthy();
  });
});
