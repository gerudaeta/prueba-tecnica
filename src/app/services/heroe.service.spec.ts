import { TestBed } from '@angular/core/testing';
import { HeroeService } from './heroe.service';
import {ResponsePagination} from "../models/common/responsePagination";
import {HeroeParams} from "../models/params/heroeParams";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ApiService} from "../core/http/services/api.service";

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
    const dummyHeroes: ResponsePagination<any> = {
      data: [], // Coloca aquí tus datos de prueba
      totalCount: 5, // Coloca aquí la cantidad total de registros
    };

    const heroeParams: HeroeParams = {
      pageNumber: 1,
      pageSize: 10,
      searchName: '',
    };

    service.getHeroes(heroeParams).subscribe((heroes) => {
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpTestingController.expectOne('heroes?_page=1&_limit=10');
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it('should retrieve a hero by ID', () => {
    const heroId = '1'; // Coloca aquí el ID de un héroe existente
    const dummyHero = { id: heroId, name: 'Superman' }; // Coloca aquí un héroe de prueba

    service.getHeroe(heroId).subscribe((hero) => {
      expect(hero).toEqual(dummyHero);
    });

    const req = httpTestingController.expectOne(`heroes/${heroId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHero);
  });

  it('should add a hero', () => {
    const newHero: any = { name: 'Flash' };

    service.addHeroe(newHero).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('heroes');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should update a hero', () => {
    const heroId = '1';
    const updatedHero: any = { name: 'Batman' };

    service.updateHeroe(heroId, updatedHero).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne(`heroes/${heroId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete a hero', () => {
    const heroId = '1';

    service.deleteHeroe(heroId).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne(`heroes/${heroId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
