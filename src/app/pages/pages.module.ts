import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducerRickyMorty } from './redux/redux.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReduxEffects } from './redux/redux.effects';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    PagesComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({statusApp: reducerRickyMorty}),
    StoreDevtoolsModule.instrument({
      maxAge: 7,
      logOnly: environment.production,
    }),
    EffectsModule.forFeature([ReduxEffects])
  ],
  providers: [
    DatePipe
  ]
})
export class PagesModule { }
