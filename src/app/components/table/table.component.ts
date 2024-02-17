import { Component, Input, TemplateRef } from '@angular/core';
import { NgForOf, NgTemplateOutlet } from '@angular/common';


export interface Column {
  columnName: string;
  property?: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgForOf, NgTemplateOutlet]
})
export class TableComponent {

  @Input() public columns: Column[] = [];
  @Input() public headerEntries: string[] = [];
  @Input() public rows: any = [];
  @Input() public rowTemplate?: TemplateRef<HTMLElement>;
}
