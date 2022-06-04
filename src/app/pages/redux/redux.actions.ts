import { Action, createAction, props } from '@ngrx/store';

export const GETALLCHARACTERS ='[GET_ALL_CHARACTERS] Get all Characters';

export class getAllCharacters implements Action{
  readonly type = GETALLCHARACTERS;
}




