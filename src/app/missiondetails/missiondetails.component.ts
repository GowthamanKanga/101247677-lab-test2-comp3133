import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissionDetailsComponent implements OnInit {
  @Input() selectedMission: any;

  constructor() { }

  ngOnInit(): void {
  }
}
