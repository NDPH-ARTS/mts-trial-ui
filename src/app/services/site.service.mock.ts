import { Observable, of } from 'rxjs';
import { Site } from '../model/site';

export class MockSiteService {
    getSites(): Observable <Site[]> {
      return of([]);
    }

    getSitesByRole(role: string): Observable <Site[]> {
      return of([]);
    }

    getSiteWithId(id: string): Observable <Site> {
      return of({} as Site);
    }
}
