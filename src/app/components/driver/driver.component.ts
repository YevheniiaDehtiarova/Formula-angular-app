import { Component, Input, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

const nationalities = {
  Spanish: 'spain',
  British: 'united-kingdom',
  Dutch: 'netherlands',
  Australian: 'australia',
  Brazilian: 'brazil',
  Colombian: 'colombia',
  Finnish: 'finland',
  French: 'france',
  German: 'germany',
  Italian: 'italy',
  Mexican: 'mexico',
  Monegasque: 'monaco',
  Polish: 'poland',
  Venezuelan: 'venezuela',
}

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  standalone: true,
})
export class DriverComponent implements OnInit {
  public readonly icons: any = nationalities;
  public wikipediaUrl: string | undefined ; 

  @Input() public id: string = '';
  @Input() public name: string = '';
  @Input() public nationality!: string;



  ngOnInit(): void {
    if(this.id){
     this.wikipediaUrl = 'http://ergast.com/api/f1/drivers/' + `${this.id}`;
    }
  }
}
