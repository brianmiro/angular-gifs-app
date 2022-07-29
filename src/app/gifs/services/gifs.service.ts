import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'USqirvQJBFPaXJUQeJrwldcnRTe6CYq3';
  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  searchGifs(query: string = ' ' ) {
    
    query = query.toLocaleLowerCase();

    if ( !this._history.includes(query) ) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }
    console.log(this._history);
  }

}
