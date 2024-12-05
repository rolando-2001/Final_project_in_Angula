import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  


  onSubmit() {
    // Llamamos al servicio para hacer la solicitud de login
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response && response.data && response.data.token) {
          console.log('Login exitoso', response.data);
          const { token } = response.data;
          localStorage.setItem('token', token);  // Guardamos el token solo si es válido
          this.router.navigate(['']);
        } else {
          console.error('Login fallido', response);
          // Aquí puedes mostrar un mensaje de error al usuario si no hay token en la respuesta
        }
      },
      error => {
        console.error('Error en login', error);
        // Aquí puedes mostrar un mensaje de error al usuario en caso de que haya un problema con la solicitud
      }
    );
  }
  



}
