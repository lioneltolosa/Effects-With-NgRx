import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { getUsers } from '../../store/actions/users.actions';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styles: []
})
export class ListaComponent implements OnInit {

    usuarios: Usuario[] = [];

    constructor(public usuarioService: UsuarioService,
                private store: Store<AppState>) { }

    ngOnInit() {
        this.store.select('users')
            .subscribe( ({users}) => {
                console.log(users);
                this.usuarios = users;
            });

        this.store.dispatch( getUsers())


   /*  this.usuarioService.getUsers()
        .subscribe(users => {
            console.log(users);
            this.usuarios = users;
        }); */

    }

}
