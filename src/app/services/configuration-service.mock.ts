import { Injectable } from '@angular/core';
import { IConfigurationService } from './configuration-service';

@Injectable({
  providedIn: 'root'
})
export class MockConfigurationService implements IConfigurationService {
  init(): void { }
}
