import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {TableColumn} from "./table-column";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {CustomAction} from "./custom-action";
import {PaginatedFilter} from "../../../models/common/paginatedFilter";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {SharedModule} from "../../shared.module";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, MatTableModule, MatSortModule, MatCheckboxModule, MatChipsModule, MatMenuModule, MatPaginatorModule, SharedModule, FormsModule, MatInputModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() customActionOneData: CustomAction | undefined;
  @Input() customActionData: CustomAction | undefined;
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() columns: TableColumn[] = [];
  @Input() messageDeleteDialog: string | undefined;
  @Input() set data(data: any[]) {
    this.setTableDataSource(data);
  }

  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onPageChanged = new EventEmitter<any>();
  @Output() onCreateForm: EventEmitter<any> = new EventEmitter();
  @Output() onView: EventEmitter<any> = new EventEmitter();
  @Output() onEditForm: EventEmitter<any> = new EventEmitter();
  @Output() onReload: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSort: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(MatSort, { static: true }) matSort!: MatSort;

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[] = [];
  public searchString: string = '';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.name);
  }

  ngAfterViewInit(): void {
    this.tableDataSource.sort = this.matSort;
  }

  setTableDataSource(data: any): void {
    // @ts-ignore
    this.tableDataSource = new MatTableDataSource<any>(data);
  }

  openCreateForm(): void {
    this.onCreateForm.emit();
  }

  openViewForm($event?: any): void {
    this.onView.emit($event);
  }

  openEditForm($event?: any): void {
    this.onEditForm.emit($event);
  }

  handleReload(): void {
    this.searchString = '';
    this.onReload.emit();
  }

  handleSort(sortParams: Sort): void {
    // @ts-ignore
    sortParams.active = this.columns.find((column) => column.name === sortParams.active).dataKey;
    if (sortParams.direction === '')
    {
      sortParams.direction = 'asc';
    }
    this.onSort.emit(sortParams);
  }

  onPageChange(pageEvent: PageEvent): void {
    const event: PaginatedFilter = {
      pageNumber: pageEvent.pageIndex + 1 ?? 1,
      pageSize: pageEvent.pageSize ?? 10,
    };
    this.onPageChanged.emit(event);
  }

  isAllSelected(): boolean {
    let result = true;
    this.tableDataSource.data.forEach((element: any) => {
      if (element.selected === false) {
        result = false;
      }
    });
    return result;
  }

  toggleTableDataSourceChecking(condition: boolean): void {
    this.tableDataSource.data.forEach((element: any) => {
      element.selected = condition;
    });
  }

  masterToggle(): void {
    this.isAllSelected() ? this.toggleTableDataSourceChecking(false) : this.toggleTableDataSourceChecking(true);
  }

  openDeleteConfirmationDialog($event: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: this.messageDeleteDialog,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDelete.emit($event);
      }
    });
  }

  handleFilter() {
    this.onFilter.emit(this.searchString);
  }
}
