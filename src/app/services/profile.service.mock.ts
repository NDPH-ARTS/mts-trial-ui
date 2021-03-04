import { Observable, of } from 'rxjs';
import { Profile } from '../model/Profile';

export class MockProfileService {
    getProfiles(): Observable <Profile[]> {
      return of([]);
    }
  }
