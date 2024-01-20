import { Component } from '@angular/core';
import { Viaje } from '../models/viaje.model';
import { ViajeService } from '../services/viaje.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
Nomber(arg0: number|undefined) {
throw new Error('Method not implemented.');
}
  viaje: Viaje = new Viaje();
  costoAproximado: number | undefined;

  constructor(private viajeService: ViajeService) {}

  calcularCostoAproximado() {
    this.costoAproximado = this.viajeService.calcularCostoAproximado(this.viaje);
  }
}