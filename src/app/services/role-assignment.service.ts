import { Injectable } from '@angular/core';
import {Observable, of, EMPTY, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { ConfigurationService } from './configuration-service';
import {RoleAssignment} from '../model/roleAssignment';

@Injectable({
  providedIn: 'root'
})
export class RoleAssignmentService {
  readonly serviceUrl = `${this.configurationService.gatewayUrl}/practitioner/roles`;

  constructor(private http: HttpClient, private configurationService: ConfigurationService) { }

  getRoleAssignments(userId: string): Observable <RoleAssignment[]> {
    const params = new HttpParams().set('userIdentity', userId);
    return this.http.get<RoleAssignment[]>(this.serviceUrl, { params })
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
