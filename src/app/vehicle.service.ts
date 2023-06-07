import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private messagesService: MessageService) { }

  getVehicle(): Observable<Vehicle[]> {
    const vehicles = of(VEHICLES);
    this.messagesService.add('VehicleServie: getVehicles()');
    return vehicles;
  }
}
