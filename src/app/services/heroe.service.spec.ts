import {TestBed} from '@angular/core/testing';
import {HeroeService} from './heroe.service';
import {ResponsePagination} from "../models/common/responsePagination";
import {HeroeParams} from "../models/params/heroeParams";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ApiService} from "../core/http/services/api.service";
import {Heroe, Publisher} from "../models/heroe";

describe('HeroeService', () => {
  let service: HeroeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroeService, ApiService],
    });
    service = TestBed.inject(HeroeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve heroes', () => {
    let heroeParams = new HeroeParams();
    heroeParams.pageNumber = 1;
    heroeParams.pageSize = 5;

    let mockHeroesResponse = new ResponsePagination<Heroe>();
    mockHeroesResponse.data = [];
    mockHeroesResponse.totalCount = 0;

    service.getHeroes(heroeParams).subscribe(result => {
      expect(result).toEqual(mockHeroesResponse);
    });

    const req = httpTestingController.expectOne(`http://localhost:3000/heroes?_page=${heroeParams.pageNumber}&_limit=${heroeParams.pageSize}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockHeroesResponse);
    httpTestingController.verify();
  });

  it('should retrieve a hero by ID', () => {
    const heroId = '1';
    const mockHero = { id: '1', name: 'Hero Name', superhero: 'Superhero Name' };

    service.getHeroe(heroId).subscribe((hero) => {
      expect(hero).toEqual(mockHero);
    });

    // Espera una solicitud HTTP GET a la URL correcta
    const req = httpTestingController.expectOne(`http://localhost:3000/heroes/${heroId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockHero);
  });

  it('should add a hero', () => {
    const newHero: Heroe = {
      id: '',
      superhero: 'Superhero Name',
      publisher: Publisher.DCComics,
      alter_ego: 'Alter Ego Name',
      first_appearance: 'First Appearance Date',
      characters: 'Add',
      status: true
    };

    service.addHeroe(newHero).subscribe(() => {
    });

    const req = httpTestingController.expectOne('http://localhost:3000/heroes');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newHero);
    req.flush({});

    httpTestingController.verify();
  });

  it('should update a hero', () => {
    const updatedHero: Heroe = {
      id: '1',
      superhero: 'Superhero Name',
      publisher: Publisher.DCComics,
      alter_ego: 'Alter Ego Name',
      first_appearance: 'First Appearance Date',
      characters: 'Update',
      status: true
    };

    service.updateHeroe('1', updatedHero).subscribe(result => {
      expect(result).toEqual(updatedHero);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/heroes/1');
    expect(req.request.method).toBe('PUT');
    req.flush(updatedHero);

    httpTestingController.verify();
  });

  it('should delete a hero', () => {
    const heroIdToDelete = '1';

    service.deleteHeroe(heroIdToDelete).subscribe(() => {
    });

    const req = httpTestingController.expectOne(`http://localhost:3000/heroes/${heroIdToDelete}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({}); // Simula una respuesta exitosa

    httpTestingController.verify();
  });
});
