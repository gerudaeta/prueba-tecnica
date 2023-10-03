import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {HeroeService} from "../../../../services/heroe.service";
import {Heroe, Publisher} from "../../../../models/heroe";
import {NotificationService} from "../../../../shared/services/notification.service";
import {map, Observable} from "rxjs";

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
    if (this.heroeForm.invalid) return;

    let superheroName = this.currentHero.superhero.toUpperCase();

    this.currentHero.superhero = superheroName;

    // Verificar si el héroe ya existe (tanto en edición como en creación)
    this.validateExistHeroe(superheroName).subscribe(exists => {
      if (exists && !this.isEditingExistingHero()) {
        this.handleExistingHero(superheroName);
      } else {
        this.saveHero();
      }
    });
  }

  private isEditingExistingHero(): boolean {
    return !!this.currentHero.id;
  }

  private saveHero() {
    const saveObservable = this.isEditingExistingHero() ?
      this.heroeService.updateHeroe(this.currentHero.id, this.currentHero) :
      this.heroeService.addHeroe(this.currentHero);

    saveObservable.subscribe(hero => {
      const message = this.isEditingExistingHero() ? `${hero.superhero} updated!` : `${hero.superhero} created!`;
      this.notificationService.showSuccess(message);
      this.dialogRef.closeAll();
    });
  }

  private handleExistingHero(superheroName: string) {
    this.notificationService.showError(`The hero ${superheroName} is already created, please enter another hero!`);
  }

  private validateExistHeroe(name: string): Observable<boolean> {
    return this.heroeService.getHeroeBySuperhero(name).pipe(
      map(x => x.length !== 0)
    );
  }
}
