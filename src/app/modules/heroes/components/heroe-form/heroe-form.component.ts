import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HeroeService} from "../../../../services/heroe.service";
import {Heroe, Publisher} from "../../../../models/heroe";
import {NotificationService} from "../../../../shared/services/notification.service";

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.css']
})
export class HeroeFormComponent implements OnInit {

  public heroeForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    status:    new FormControl(true),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public matDialogRef: MatDialogRef<HeroeFormComponent>,
              private dialogRef: MatDialog,
              private heroeService: HeroeService,
              private notificationService: NotificationService) {
  }

  get currentHero(): Heroe {
    return this.heroeForm.value as Heroe;
  }

  ngOnInit(): void {
    if (this.data !== undefined) {
      this.heroeForm.reset(this.data);
    }
  }

  onSubmit() {
    if ( this.heroeForm.invalid ) return;

    this.currentHero.superhero = this.currentHero.superhero.toUpperCase();

    if ( this.currentHero.id ) {
      this.heroeService.updateHeroe(this.currentHero.id, this.currentHero)
        .subscribe( hero => {
          this.notificationService.showSuccess(`${ hero.superhero } updated!`);
          this.dialogRef.closeAll();
        });
    } else {
      this.heroeService.addHeroe(this.currentHero)
        .subscribe( hero => {
          this.notificationService.showSuccess(`${ hero.superhero } created!`);
          this.dialogRef.closeAll();
        });
    }
  }
}
