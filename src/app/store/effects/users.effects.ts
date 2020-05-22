import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/users.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
        private userService: UsuarioService) {
    }

    getUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( actions.getUsers ),
            mergeMap(
                () => this.userService.getUsers()
                    .pipe(
                        map( users => actions.getUsersSuccess({ users: users }) ),
                        catchError( err => of(actions.getUsersError({ payload: err })) )
                    )
            )
        )
    );
}