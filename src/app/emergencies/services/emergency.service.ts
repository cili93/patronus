import { Injectable } from '@angular/core';
import { EmergencyRepository } from '../repositories/emergency.repository';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmergencyResponse } from '../types/emergency';
import { mapEmergencies } from '../utils/emergencyMapper';

@Injectable({
  providedIn: 'root',
})
export class EmergencyService {
  constructor(private repository: EmergencyRepository) {}

  getEmergencies() {
    return this.repository.get().pipe(
      catchError((e) => {
        console.error('Error happened', e);

        return of({ content: [] } as EmergencyResponse);
      }),
      map(mapEmergencies)
    );
  }
}
