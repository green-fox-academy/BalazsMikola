import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent implements OnInit {

  weatherInfo:any;

  constructor(private service : ApiService) { }

  ngOnInit() {
    this.service.currentCity.subscribe((data:any) => {
    this.weatherInfo = data;
    if(this.weatherInfo) {
      this.weatherInfo.temp = Math.round(this.weatherInfo.temp -273);
    }
    })  
  }
}
