import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPageComponent } from './list-page.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {of} from "rxjs";
import {TableComponent} from "../../../../shared/components/table/table.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        TableComponent,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialog,
          useClass: MatDialogStub
        }
      ],
    });
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MatDialogStub {
  // Define los métodos que necesitas para tu prueba aquí
  // Por ejemplo, puedes definir un método open() simulado.
  open() {
    return {
      afterClosed: () => of({}), // Puedes personalizar esto según tus necesidades
    };
  }
}

