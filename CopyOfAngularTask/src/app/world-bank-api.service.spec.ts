import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WorldBankApiService } from './world-bank-api.service';
import { of } from 'rxjs';

describe('WorldBankApiService', () => {
  let service: WorldBankApiService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [WorldBankApiService],
    });
    service = TestBed.inject(WorldBankApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch country info', () => {
    const countryId = 'exampleCountryId';
    spyOn(service['http'], 'get').and.returnValue(of({ country: 'info' }));

    service.fetchCountryInfo(countryId).subscribe((response) => {
      expect(response).toEqual({ country: 'info' });
    });
  });

  it('should handle errors when fetching country info', async () => {
    const countryId = 'exampleCountryId';
    const errorMessage = 'An error occurred';
    spyOn(service['http'], 'get').and.returnValue(of(null).pipe(() => { throw new Error(errorMessage); }));

    await expectAsync(service.fetchCountryInfo(countryId).toPromise()).toBeRejectedWithError(errorMessage);
  });
      
 }
);

