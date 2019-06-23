import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { City } from './models/city.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private city_model:City;
  public loadedCities = new BehaviorSubject<any>(this.city_model);
  public currentCities = this.loadedCities.asObservable();

  initialCitiesList:number[] = [524901,703448,2643743];

  constructor(private httpClient: HttpClient) { 
    this.getInitialCities();
  }
  
  
  getInitialCities() { 
    this.httpClient.get(`http://api.openweathermap.org/data/2.5/group?id=${this.initialCitiesList[0]},${this.initialCitiesList[1]},${this.initialCitiesList[2]}&units=metric&appid=${environment.key}`)
    .subscribe((data:any) => {
      let response:any;
      let cityArray:any[] = [];
      response = data;
      for(let i:number = 0; i<response.list.length; i++){
        cityArray.push(new City(response.list[i].name, Math.round(response.list[i].main.temp), response.list[i].sys.country, `http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png`));
      }
      this.loadedCities.next(cityArray);
    });
  }

  getOneCity(city:string) {
    this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${environment.key}`)
    .subscribe((data:any) => {
      let response:any;
      let cityArray:any[] = [];
      response = data;
      cityArray.push(new City(response.name, Math.round((response.main.temp - 273)), response.sys.country, `http://openweathermap.org/img/w/${response['weather'][0].icon}.png`));
      this.loadedCities.next(cityArray);
    });
  }

}
