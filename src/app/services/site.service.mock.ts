import { Observable, of } from 'rxjs';
import { Site } from '../model/site';
import {SiteName} from '../model/siteName';

export class MockSiteService {
    getSites(): Observable <Site[]> {
      return of([]);
    }

    getAssignedSites(): Observable <SiteName[]> {
      return of([]);
    }

    getSitesByRole(role: string): Observable <Site[]> {
      return of([]);
    }

    getSite(id: string): Observable <Site> {
      return of({} as Site);
    }
}
