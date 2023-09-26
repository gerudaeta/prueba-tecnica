import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {MaterialModule} from "../../material/material.module";
import {TableComponent} from "../../shared/components/table/table.component";
import { HeroeFormComponent } from './components/heroe-form/heroe-form.component';

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
  ]
})
export class HeroesModule { }
