import {Injectable} from '@angular/core';
import {environments} from "../../../../environments/environments";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected readonly hostAddress = environments.baseUrl;

  constructor(private http: HttpClient) { }

  public getRequest<T>(route: string, params?: HttpParams): Observable<T> {
    // @ts-ignore
    return this.http.get<T>(`${this.hostAddress}/${route}`, { params, observe: 'response' });
  }

  public putRequest<TSend, TResult>(route: string, payload: TSend, params?: HttpParams): Observable<TResult> {
    return this.http.put<TResult>(`${this.hostAddress}/${route}`, payload, { params });
  }

  public postRequest<TSend, TResult>(route: string, payload: TSend, params?: HttpParams): Observable<TResult> {
    return this.http.post<TResult>(`${this.hostAddress}/${route}`, payload, { params });
  }

  public deleteRequest<TResult>(route: string, params?: HttpParams): Observable<TResult> {
    return this.http.delete<TResult>(`${this.hostAddress}/${route}`, { params });
  }
}
