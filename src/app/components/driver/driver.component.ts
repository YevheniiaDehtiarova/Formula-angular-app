import { Component, Input, OnInit } from '@angular/core';


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
  public wikipediaUrl: string | undefined;

  @Input() public id: string = '';
  @Input() public name: string = '';
  @Input() public nationality!: string;



  ngOnInit(): void {
    //console.log(this.id, this.name, this.nationality, 'input driver properties')
    if (this.id) {
      this.getWikipediaUrl(this.id);
    }
  }

  getWikipediaUrl(driverId: string): void {
    const apiUrl = `https://ergast.com/api/f1/drivers/${driverId}.json`;

    //console.log(apiUrl, 'apiurl')

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data, 'data in fecth')
        const driver = data.MRData.DriverTable.Drivers[0];

        if (driver && driver.url) {
          this.wikipediaUrl = driver.url;
        } else {
          this.wikipediaUrl = `https://en.wikipedia.org/wiki/${this.name.replace(' ', '_')}`;
        }
      })
      .catch((error) => {

        this.wikipediaUrl = `https://en.wikipedia.org/wiki/${this.name.replace(' ', '_')}`;
      });
  }
}
