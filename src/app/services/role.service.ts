import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Role } from '../model/role';
import { ConfigurationService } from './configuration-service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  readonly serviceUrl = `${this.configurationService.gatewayUrl}/roles`;

  constructor(private http: HttpClient, private configurationService: ConfigurationService) { }

  getRoles(): Observable <Role[]> {
    return this.http.get<Role[]>(this.serviceUrl)
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
