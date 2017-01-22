import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unallocated',
  templateUrl: './unallocated.component.html',
  styleUrls: ['./unallocated.component.css']
})
export class UnallocatedComponent implements OnInit {
  @Input() name: string;

  constructor() {
   }

  ngOnInit() {
  }
}
