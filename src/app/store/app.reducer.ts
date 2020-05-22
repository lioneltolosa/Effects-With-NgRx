import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
   users: reducers.UsuariosState,
   user: reducers.UsuarioState 
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usuariosReducer,
    user: reducers.UsuarioReducer,
}