import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://localhost:7002/GetWeatherForecast';

type ProfileType = {
  date?: string,
  temperatureC?: number,
  temperatureF?: number,
  summary?: string
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles!: ProfileType[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.http.get<ProfileType[]>(GRAPH_ENDPOINT)
      .subscribe(profiles => {
        this.profiles = profiles;
      });
      console.log(this.profiles);
  }
}
