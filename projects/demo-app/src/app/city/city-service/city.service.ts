import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopulationDetails } from '../model/populationdetails';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  apiUrl = 'https://countriesnow.space/api/v0.1/countries/population/cities';

  constructor(private http: HttpClient) {}

  getDetailsByCity(location: string): Observable<PopulationDetails> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    return this.http
      .post<PopulationDetails>(
        this.apiUrl,
        JSON.stringify({ city: location }),
        {
          headers: headers,
        }
      )
      .pipe(
        map((response: any) => {
          return {
            city: response.data.city,
            country: response.data.country,
            year: response.data.populationCounts[0]?.year,
            value: response.data.populationCounts[0]?.value,
          };
        })
      );
  }
}
