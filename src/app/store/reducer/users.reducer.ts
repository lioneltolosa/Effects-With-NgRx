import { createReducer, on } from '@ngrx/store';
import * as actionsUsers from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsersState {
    users  : Usuario[],
    loaded: boolean,
    loading: boolean,
    error : any
}

export const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error : null
}

const _usersReducer = createReducer(initialState,
    on(actionsUsers.getUsers, state => ({ ...state, loading: true})),
    on(actionsUsers.getUsersSuccess, (state, { users }) => ({ 
        ...state,
        loading: false,
        loaded: true,
        users: [ ...users ]
    })),
    on(actionsUsers.getUsersError, (state, { payload }) => ({ 
        ...state,
        loading: false,
        loaded: false,
        key: [ ...payload ]
    })),

);

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}