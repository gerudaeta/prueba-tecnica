import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { UppercaseDirective } from './directives/uppercase.directive';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {DataPropertyGetterPipe} from "./pipes/data-property-getter.pipe";
import { CapitalizeFirstLetterPipePipe } from './pipes/capitalize-first-letter-pipe.pipe';

@NgModule({
  declarations: [
    Error404PageComponent,
    UppercaseDirective,
    DataPropertyGetterPipe,
    CapitalizeFirstLetterPipePipe
  ],
  exports: [
    Error404PageComponent,
    DataPropertyGetterPipe,
    CapitalizeFirstLetterPipePipe
  ],
  imports: [
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class SharedModule { }
