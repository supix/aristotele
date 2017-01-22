import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-date',
  templateUrl: './day-date.component.html',
  styleUrls: ['./day-date.component.css']
})
export class DayDateComponent implements OnInit {
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

  private getDayOfWeek(): string {
    let names = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
    return names[this.date.getDay()];
  }

  private getDayNumber(): number {
    return this.date.getDate();
  }

  private getMonth(): string {
    let names = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
    return names[this.date.getMonth()];
  }

}
