import { Observable, of } from 'rxjs';
import { Role } from '../model/role';

export class MockRoleService {
  getRoles(): Observable <Role[]> {
      return of([]);
    }
  }
