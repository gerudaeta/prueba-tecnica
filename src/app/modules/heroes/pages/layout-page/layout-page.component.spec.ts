import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPageComponent } from './layout-page.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HeroesRoutingModule} from "../../heroes-routing.module";
import {TableComponent} from "../../../../shared/components/table/table.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SharedModule} from "../../../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ActivatedRoute} from "@angular/router";

describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (param: string) => '1', // Simula un valor para el parámetro 'id'
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPageComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HeroesRoutingModule,
        TableComponent,
        MatSlideToggleModule,
        SharedModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    });
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
