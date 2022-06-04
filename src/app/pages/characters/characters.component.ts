import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { characters } from '../redux/models/redux.model';
import { getAllCharacters } from '../redux/redux.actions';
import { State } from '../redux/redux.reducer';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  listCharacters$: Observable<any>;
  returnApi: any;

  constructor(private store: Store<State>) { 
     this.store.select('character').subscribe(state => {
      this.returnApi = state;
    }) 
    this.listCharacters$ = this.returnApi;
  }

  getAllCharacters(): void{
    const accion = new getAllCharacters();
    this.store.dispatch(accion)
  }

  ngOnInit(): void {
  }

}
