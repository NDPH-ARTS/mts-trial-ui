import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Site } from '../model/site';
import { ConfigurationService } from './configuration-service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  readonly serviceUrl = `${this.configurationService.gatewayUrl}/sites`;

  constructor(private http: HttpClient, private configurationService: ConfigurationService) { }

  getSites(): Observable <Site[]> {
  //   const dummy = [
  //     {
  //     name: 'Site 21',
  //     siteId: '21'
  //   } as Site,
  //     {
  //     name: 'Bonny site',
  //     siteId: '431'
  //   } as Site,
  //     {
  //     name: 'Dont go here site',
  //     siteId: '5'
  //   } as Site,
  // ];

  //   return of(dummy);

    return this.http.get<Site[]>(this.serviceUrl)
      .pipe(catchError(this.handleError));
  }

  getSiteWithId(id: string): Observable<Site> {
    const uri = this.serviceUrl + '/' + id;
    return this.http.get<Site>(uri)
    .pipe(catchError(this.handleError));
  }

  getSitesByRole(role: string): Observable<Site[]> {
    const params = new HttpParams().set('role', role);
    return this.http.get<Site[]>(this.serviceUrl, {params})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Error getting profile data.');
  }
}
