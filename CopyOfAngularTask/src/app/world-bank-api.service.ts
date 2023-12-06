import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const WORLD_BANK_API_URL = 'http://api.worldbank.org/v2/country/';

@Injectable({
  providedIn: 'root'
})

export class WorldBankApiService {
  constructor(private http: HttpClient) {}

  public fetchCountryInfo(_countryId: string): Observable <any> {
    const wbUrl = `${WORLD_BANK_API_URL}${_countryId}?format=json`;
    return this.http.get(wbUrl);
  }
}
