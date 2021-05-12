import { Observable, of } from 'rxjs';
import { RoleAssignment } from '../model/roleAssignment';

export class MockRoleAssignmentService {
  getRoleAssignments(userId: string): Observable <RoleAssignment[]> {
      return of([]);
    }
  }
