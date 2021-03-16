import { Observable, of } from 'rxjs';
import { Site } from '../model/site';

export class MockSiteService {
    getSites(): Observable <Site[]> {
      return of([]);
    }
  }
