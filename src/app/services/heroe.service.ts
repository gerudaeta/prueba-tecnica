import { Injectable } from '@angular/core';
import {ApiService} from "../core/http/services/api.service";
import {map, Observable} from "rxjs";
import {Heroe} from "../models/heroe";
import {HeroeParams} from "../models/params/heroeParams";
import {HttpParams} from "@angular/common/http";
import {ResponsePagination} from "../models/common/responsePagination";

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  constructor(private apiService: ApiService) { }

  getHeroes(heroeParams: HeroeParams): Observable<ResponsePagination<Heroe>> {
    const url = `heroes`;

    let params = new HttpParams();

    if (heroeParams.pageNumber) {
      params = params.append('_page', heroeParams.pageNumber.toString()); // Convierte a cadena
    }

    if (heroeParams.pageSize) {
      params = params.append('_limit', heroeParams.pageSize.toString()); // Convierte a cadena
    }

    if (heroeParams.searchName !== '') {
      params = params.append('superhero', heroeParams.searchName);
    }

    // Realiza la solicitud y obtén la respuesta completa (incluyendo los encabezados)
    return this.apiService.getRequest<any>(url, params).pipe(map((x: any) => {
      let response = new ResponsePagination<Heroe>();
      response.data = x.body;
      response.totalCount = +x.headers.get('X-Total-Count');
      return response;
    }));
  }

  getHeroe(id: string): Observable<any> {
    const url = `heroes/${id}`;
    return this.apiService.getRequest(url);
  }

  addHeroe(heroe: Heroe): Observable<any> {
    const url = `heroes`;
    return this.apiService.postRequest(url, heroe);
  }

  updateHeroe(id: string, heroe: Heroe): Observable<any> {
    const url = `heroes/${id}`;
    return this.apiService.putRequest(url, heroe);
  }

  deleteHeroe(id: string): Observable<any> {
    const url = `heroes/${id}`;
    return this.apiService.deleteRequest(url);
  }
}
