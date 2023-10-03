import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFormComponent } from './heroe-form.component';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HeroeService} from "../../../../services/heroe.service";
import {NotificationService} from "../../../../shared/services/notification.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('HeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroeFormComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        HeroeService,
        NotificationService
      ],
    });
    fixture = TestBed.createComponent(HeroeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
