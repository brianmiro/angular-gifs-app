import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'USqirvQJBFPaXJUQeJrwldcnRTe6CYq3';
  private _history: string[] = [];
  
  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {

      this._history = JSON.parse( localStorage.getItem('history')! )  || [];
      this.results = JSON.parse( localStorage.getItem('results')!) || [];

  }

  searchGifs(query: string = ' ' ) {
    
    query = query.toLocaleLowerCase();

    if ( !this._history.includes(query) ) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify( this._history) );

    }
    this.http
    .get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.apiKey }&q=${ query }&limit=10`)
    .subscribe( ( resp ) => {
      console.log(resp.data)
      this.results = resp.data;
      localStorage.setItem('results', JSON.stringify( this.results) );
    })
  }

}
