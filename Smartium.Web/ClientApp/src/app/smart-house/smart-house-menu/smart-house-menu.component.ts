import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-smart-house-menu-component',
  templateUrl: './smart-house-menu.component.html'
})
export class SmartHouseMenuComponent {
  
  public houses: House[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<House[]>(baseUrl + 'api/house/getAll').subscribe(result => {
      this.houses = result;
    }, error => console.error(error));
  }
}

interface House {
  houseId: number;
  name: string;
}