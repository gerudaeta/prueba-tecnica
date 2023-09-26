import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFormComponent } from './heroe-form.component';

describe('HeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeFormComponent]
    });
    fixture = TestBed.createComponent(HeroeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
