import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = { email: '' , senha: '' };
  public mensagemDeErro?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
   }

  public login(form: NgForm) {
    let usuarioInformacoes: object = {
      user_email: this.usuario.email,
      user_password: this.usuario.senha
    };

    return this.authService.login(usuarioInformacoes).subscribe(data  => {
      const dataTransformedIntoObject = JSON.parse(JSON.stringify(data));
      this.mensagemDeErro = '';

      const userObject = {
        id: dataTransformedIntoObject.user.id_user,
        name: dataTransformedIntoObject.user.user_name
      };

      localStorage.setItem('user', JSON.stringify(userObject));
      this.authService.setToken(dataTransformedIntoObject.token);
      // this.router.navigate(['/home']);
      window.location.href = environment.apllicationUrl;
    }, (error) => {
      const errorCode = error.error.error;

      if (error.status == '400') {
        if (/^auth-[0-9]+/i.test(errorCode)) {
          const errorContent = error.error.content;
          this.mensagemDeErro = errorContent;
        }
      }
    });
  }

  ngOnInit(): void {
    
  }

}
