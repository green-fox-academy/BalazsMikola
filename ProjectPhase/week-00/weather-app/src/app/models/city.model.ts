export class City{
  name:string;
  temp:number;
  country:string;
  icon:string;

  constructor(name:string, temp:number, country:string, icon:string){
    this.name = name;
    this.temp = temp;
    this.country = country;
    this.icon = icon;
  }
}