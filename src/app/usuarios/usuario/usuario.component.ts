import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { cargarUsuario } from '../../store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('user').subscribe( ({ user, loading, error }) => {
      this.usuario = user;
    });


    this.router.params.subscribe( ({ id }) => {
      
      this.store.dispatch( cargarUsuario({ id }) );

    });

  }

}
