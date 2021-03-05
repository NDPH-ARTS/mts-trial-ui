import { AuthenticationService } from './oauth2-authentication.service';

export class MockAuthenticationService implements AuthenticationService {
  init(): void {
  }
  login(): void {
  }
  logout(): void {
  }
  isAuthenticated(): boolean {
    return true;
  }
  getUsername(): string {
    return '';
  }
  getIDToken(): string {
    return '';
  }
}
