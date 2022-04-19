import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smart-home-component',
  templateUrl: './smart-home.component.html'
})

export class SmartHomeComponent {
  public houseId = 0;
  public houseName = 'My fisrt house';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.houseId = this.route.snapshot.params.houseId;
    console.log(this.houseId);          
 }

 
}
