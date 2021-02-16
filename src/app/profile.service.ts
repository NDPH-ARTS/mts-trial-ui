import { Injectable } from '@angular/core';
import {Profile} from "./Profile";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Observable <Profile> {
    return of (this.mockProfile); // mock for now
  }

  private mockProfile : Profile = {
    id : 'mock-id-123',
    familyName : 'Family name goes here',
    givenName : 'Given name goes here',
    prefix : 'Prefix goes here'
  }
}
