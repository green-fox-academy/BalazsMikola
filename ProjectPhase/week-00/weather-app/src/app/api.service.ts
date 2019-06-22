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
  public loadedCities = new BehaviorSubject<City>(this.city_model);
  public currentCity = this.loadedCities.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.getContacts('Budapest');
  }

  getContacts(city:string) {
    this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${environment.key}`)
    .subscribe((data:any) => {
      let response:any;
      response = data;
      this.loadedCities.next(new City(response.name, response.main.temp, response.sys.country, `http://openweathermap.org/img/w/${response['weather'][0].icon}.png`));
    });
  }
}
