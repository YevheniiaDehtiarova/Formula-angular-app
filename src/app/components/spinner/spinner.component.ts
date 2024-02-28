import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { DataStore } from 'src/app/store/data.store';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  public loading$ = combineLatest([this.dataStore.racesLoading$,this.dataStore.championsLoading$])
  .pipe(map(([racesLoading, championsLoading])=> racesLoading || championsLoading))

 constructor(public dataStore: DataStore){}
}
