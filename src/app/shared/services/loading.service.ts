import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoadingComponent} from "../components/loading/loading.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public dialogRef!: MatDialogRef<LoadingComponent>;

  constructor(private dialog: MatDialog) { }

  public open(title: string = 'Cargando...'): Observable<boolean> {
    this.dialogRef = this.dialog.open(LoadingComponent, {disableClose: true, backdropClass: 'light-backdrop'});
    this.dialogRef.updateSize('200px');
    this.dialogRef.componentInstance.title = title;
    return this.dialogRef.afterClosed();
  }

  public close(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
