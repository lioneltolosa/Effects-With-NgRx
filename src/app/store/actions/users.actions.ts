import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
    '[Users] Get Users Success',
    props<{users: Usuario[]}>()
);

export const getUsersError = createAction(
    '[Users] Get Users Error',
    props<{payload: any}>()
);