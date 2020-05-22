import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/users.actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
        private userService: UsuarioService) {
    }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getUsers),
        //tap(data => console.log('effect tap', data)),
        mergeMap(() => this.userService.getUsers()
            .pipe(
                //tap(data => console.log('getUsers effect', data)),
                map( users => actions.getUsersSuccess({users: users}))
            )
        )
    ));
}