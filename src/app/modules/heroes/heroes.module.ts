import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {MaterialModule} from "../../material/material.module";
import {TableComponent} from "../../shared/components/table/table.component";
import { HeroeFormComponent } from './components/heroe-form/heroe-form.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SharedModule} from "../../shared/shared.module";

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
    MaterialModule,
    TableComponent,
    MatSlideToggleModule,
    SharedModule,
  ]
})
export class HeroesModule { }
