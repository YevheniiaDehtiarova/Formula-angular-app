import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Column, TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let testedColumn: Column;
  let testedEntry: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  testedColumn = {
    columnName: 'aaa',
    property: 'abc'
  };
  testedEntry='abc';

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test input columns when Table Component init', () => {
    const testColumns: Column[] = [];
    testColumns.push(testedColumn);
    component.columns = testColumns;
    fixture.detectChanges();
    expect(component.columns).toEqual(testColumns);
  });

  it('should test input headerEntries when Table Component init', () => {
    const testedEntries: string[] = [];
    testedEntries.push(testedEntry);
    component.headerEntries = testedEntries;
    fixture.detectChanges();
    expect(component.headerEntries).toEqual(testedEntries)
});

})
