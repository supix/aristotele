import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;
  constructor() { 
  }

  ngOnInit() {
  }
}
