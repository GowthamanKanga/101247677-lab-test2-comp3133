import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
})
export class MissionListComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  searchYear: number | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe((data: any[]) => {
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  filterByYear(year: number | undefined): void {
    if (!year) {
      this.filteredLaunches = this.launches;
      return;
    }

    this.filteredLaunches = this.launches.filter(launch => launch.launch_year === year.toString());
  }
}
