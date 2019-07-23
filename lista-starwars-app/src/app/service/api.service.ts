import { ListaFilme } from './../model/lista';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://swapi.co/films';

@Injectable({
  providedIn: 'root'
})
/**
 //erro na chamada da Lista :/

  export class ApiService{
    private baseUrl: string = 'http://swapi.co/api';
    constructor(private http : Http){
    }


    getAll(): Observable<Listas[]>{
      let filmes = this.http
        .get(`${this.baseUrl}/films`, { headers: this.getHeaders()})
        .map(mapPersons)
        .catch(handleError);
        return filmes;
    }

    private getHeaders(){
      // I included these headers because otherwise FireFox
      // will request text/html
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    get(id: number): Observable<ListaFilme> {
      let filmes = this.http
        .get(`${this.baseUrl}/films/${id}`, {headers: this.getHeaders()})
        .map(mapPerson)
        .catch(handleError);
        return filmes;
    }

    save(listas: Listas) : Observable<Response>{
      return this
        .http
        .put(`${this.baseUrl}/films/${listas_id}`,
              JSON.stringify(listas),
              {headers: this.getHeaders()});
    }

  }
function mapPersons(response:Response): Listas[]{
    return response.json().results.map(toListas)
  }
function toListas(r:any): Listas{
    let filmes = <Listas>({
      id: extractId(r),
      url: r.url,
      name: r.name,
      weight: Number.parseInt(r.mass),
      height: Number.parseInt(r.height),
    });
    console.log('Parsed filmes:', filmes);
    return filmes;
  }
function extractId(listaData:any){
    let extraId = listaData.url.replace('http://swapi.co/api/films/','').replace('/','');
    return parseInt(extraId);
  }
function mapPerson(response:Response): Listas{
     return toListas(response.json());
  }

function handleError (error: any) {
  let errorMsg = error.message || 'Falha na comunicação'
  console.error(errorMsg);

  return Observable.throw(errorMsg);
}

*/

export class ApiService {

  constructor(private http: HttpClient) { }

  getListas (): Observable<ListaFilme[]> {
    return this.http.get<ListaFilme[]>(apiUrl)
      .pipe(
        tap(listas => console.log('leu os filmes')),
        catchError(this.handleError('getListas', []))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}






