import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get history() {
    return this.gifService.history
  }

  constructor( private gifService: GifsService ) {}

  searchItem( termino: string ){
    console.log('sdsd',termino)
   // this.gifService.searchGifs( termino );
  }
 
}
