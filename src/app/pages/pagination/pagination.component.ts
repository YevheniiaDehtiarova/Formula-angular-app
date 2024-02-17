import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataStore } from '../../store/data.store';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  currentPage!: number;
  @Input()
  itemsPerPage!: number;
  @Input() totalItems: any;

  @Output() pageChange = new EventEmitter<number>();

  totalPages: any;


  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  prevPage() {
      this.pageChange.emit(this.currentPage - 1);
  }

}
