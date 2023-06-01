import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicle: Vehicle = {
    id: '6d70ccbe-0010-11ee-be56-0242ac120002',
    make: 'Honda',
    model: 'S2000',
    year: 2003,
  };
}
