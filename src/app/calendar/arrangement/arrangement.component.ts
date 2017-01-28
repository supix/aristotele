import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle/vehicle.model';

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css']
})
export class ArrangementComponent implements OnInit {
  vehicles: Vehicle[];
  constructor() {
    this.vehicles = [];
    for (let i = 0; i < 3; i++)
      this.vehicles.push(Vehicle.getRandom());
  }

  ngOnInit() {
  }

  go() { 
    console.log("ciao"); 
  }
}
