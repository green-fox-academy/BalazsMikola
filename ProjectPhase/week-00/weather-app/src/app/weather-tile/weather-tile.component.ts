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
    this.service.currentCities.subscribe((data:any) => this.weatherInfo = data);  
  }

  reset(){
    this.service.getInitialCities();
  }
}
