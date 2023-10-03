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

describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPageComponent],
      imports: [
        CommonModule,
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
      ]
    });
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
