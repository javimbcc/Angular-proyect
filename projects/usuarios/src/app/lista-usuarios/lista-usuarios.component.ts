import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent implements OnInit {
  listausuarios: any[] = [];
  constructor(private userService: UsuariosService) {}

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe((resp) => {
      console.log(resp);
      resp.data.array.forEach((user: Usuario) => {
        this.listausuarios.push(user);
      });
    });
  }
}
