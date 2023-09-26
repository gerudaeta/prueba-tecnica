import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {TableComponent} from "../../shared/components/table/table.component";
import { HeroeFormComponent } from './components/heroe-form/heroe-form.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    HeroeFormComponent
  ],
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
})
export class HeroesModule { }
