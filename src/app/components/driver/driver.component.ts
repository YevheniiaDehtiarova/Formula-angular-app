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
    console.log( this.id, this.name)
    if(this.id){
    // this.wikipediaUrl = 'http://ergast.com/api/f1/drivers/' + `${this.id}`;
    this.getWikipediaUrl(this.id);
    }
  }

  getWikipediaUrl(driverId: string): void {
    // Use the Ergast API to get driver details, including Wikipedia URL
    const apiUrl = `https://ergast.com/api/f1/drivers/${driverId}.json`;

    console.log(apiUrl, 'apiurl')

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'data in fecth')
        const driver = data.MRData.DriverTable.Drivers[0];

        // Check if Wikipedia URL is available in the response
        if (driver && driver.url) {
          this.wikipediaUrl = driver.url;
          console.log(this.wikipediaUrl, '1')
        } else {
          // If no Wikipedia URL is available, you can create a generic link
          this.wikipediaUrl = `https://en.wikipedia.org/wiki/${this.name.replace(' ', '_')}`;
          console.log(this.wikipediaUrl, '2')
        }
      })
      .catch((error) => {
        console.error('Error fetching driver details:', error);

        // If there's an error, create a generic Wikipedia link
        this.wikipediaUrl = `https://en.wikipedia.org/wiki/${this.name.replace(' ', '_')}`;
        console.log(this.wikipediaUrl, '3')
      });
  }
}
