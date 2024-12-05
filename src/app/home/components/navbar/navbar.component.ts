import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartData } from '../../../cart/interfaces/cart.data';
import { CartService } from '../../../cart/services/cart.service';
import {jwtDecode} from 'jwt-decode';  // Importamos jwt-decode
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  decodedToken: any;  // Variable para almacenar el token decodificado
  constructor(private router: Router) { }


  ngOnInit(): void {
    // Intentamos obtener y decodificar el token
    const token = localStorage.getItem('token');
    
    if (token) {
      // Decodificamos el token
      this.decodedToken = jwtDecode(token);
      
    } else {
      console.log('Token no encontrado');
    }
  }


  logout(): void {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');
    
    // Redirigir al usuario a la página de login o inicio
    this.router.navigate(['/login']);  // Asegúrate de tener una ruta de login configurada
  }
}
