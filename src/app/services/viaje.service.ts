// viaje.service.ts

import { Injectable } from '@angular/core';
import { Viaje } from '../models/viaje.model';

@Injectable({
  providedIn: 'root',
})
export class ViajeService {

  calcularCostoAproximado(viaje: Viaje): number {
    if (viaje && viaje.distancia !== undefined) {
      return viaje.distancia * 0.1; 
    } else {
      console.error('Error: El objeto viaje o la propiedad distancia no están definidos.');
      return 0;
    }
  }
}
