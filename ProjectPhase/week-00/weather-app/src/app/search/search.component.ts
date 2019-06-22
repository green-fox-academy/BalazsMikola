import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  initial:string = '';

  constructor(private service : ApiService) { }

  askForCity(input:string){
    this.service.getContacts(input);
  }
}
