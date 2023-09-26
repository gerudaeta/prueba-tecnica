import {Component, OnInit} from '@angular/core';
import {Heroe} from "../../../../models/heroe";
import {TableColumn} from "../../../../shared/components/table/table-column";
import {HeroeService} from "../../../../services/heroe.service";
import {HeroeParams} from "../../../../models/params/heroeParams";
import {PaginatedFilter} from "../../../../models/common/paginatedFilter";
import {ResponsePagination} from "../../../../models/common/responsePagination";
import { MatDialog } from '@angular/material/dialog';
import {HeroeFormComponent} from "../../components/heroe-form/heroe-form.component";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public heroes: ResponsePagination<Heroe>;
  public heroesColumns!: TableColumn[];
  heroesParams = new HeroeParams();
  public messageDeleteDialog = "Desea eliminar este heroe?";

  constructor(private heroeService: HeroeService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initColumns();
    this.getHeroes();
  }

  private initColumns(): void {
    this.heroesColumns = [
      { name: 'Codigo', dataKey: 'id', isSortable: false, isShowable: true },
      { name: 'Nombre', dataKey: 'superhero', isSortable: false, isShowable: true },
      { name: 'Estado', dataKey: 'status', isSortable: false, isShowable: true, isStatus: true },
      { name: 'Acciones', dataKey: 'action', position: 'right' },
    ];
  }

  private getHeroes(): void {
    this.heroeService.getHeroes(this.heroesParams).subscribe((result) => {
        this.heroes = result;
      },
      error => {
        console.log(error);
      });
  }

  openForm(heroe?: Heroe) {
    const dialogRef = this.dialog.open(HeroeFormComponent, {
      data: heroe,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getHeroes();
    });
  }

  reload() {
    this.heroesParams.pageNumber = 1;
    this.heroesParams.pageSize = 5;
    this.getHeroes();
  }

  remove($event: string) {
    this.heroeService.deleteHeroe($event).subscribe(() => {
      this.getHeroes();
    });
  }

  filter($event: any) {
    this.heroesParams.searchName = $event;
    this.heroesParams.pageNumber = 1;
    this.heroesParams.pageSize = 5;
    this.getHeroes();
  }

  pageChanged($event: PaginatedFilter) {
    this.heroesParams.pageNumber = $event.pageNumber;
    this.heroesParams.pageSize = $event.pageSize;
    this.getHeroes();
  }
}
