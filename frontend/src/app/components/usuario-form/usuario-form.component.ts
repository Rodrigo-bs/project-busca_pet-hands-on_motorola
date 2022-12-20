import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styles: [
  ]
})
export class UsuarioFormComponent implements OnInit {

  UserForm!: FormGroup;
  description: any;
  userService: any;
  public myUsers: Array<User> = [];


  constructor(
    private user: UserService,
    private router: Router
    
  ) { 
    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
   }

  private registro: User = <User>{};
  //private userInfos: any = JSON.parse(localStorage.getItem('user') as string);

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      user_email: new FormControl('', [Validators.required]),
      user_password: new FormControl('', [Validators.required]),
      user_cpf: new FormControl('', [Validators.required]),
      user_phone: new FormControl('', [Validators.required]),
    });

    this.toggleRecompenseInput();

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  get user_name(): AbstractControl {
    return this.UserForm.get('user_name')!;
  }

  get user_email(): AbstractControl {
    return this.UserForm.get('user_email')!;
  }

  get user_password(): AbstractControl {
    return this.UserForm.get('user_password')!;
  }
  get user_cpf(): AbstractControl {
    return this.UserForm.get('user_cpf')!;
  }
  get user_phone(): AbstractControl {
    return this.UserForm.get('user_phone')!;
  }

  public toggleRecompenseInput(): void {
    const checkboxButton = document.querySelector('.checkbox-box input[type="checkbox"]');

    checkboxButton?.addEventListener('click', (event) => {
      
    });
  }

  public insertValuesIntoTheInterface() {
    const user: any = JSON.parse(localStorage.getItem('user') as string);

    this.registro.user_name = this.user_name.value;
    this.registro.user_email = this.user_email.value;
    this.registro.user_password = this.user_password.value;
    this.registro.user_cpf = this.user_cpf.value;
    this.registro.user_phone = this.user_phone.value;
    this.registro.user_photo = '';
  }

  submit(): void{
    console.log(this.UserForm.invalid);
    if (this.UserForm.invalid) return;

    this.insertValuesIntoTheInterface();

    this.user.insertNewUser(this.registro).subscribe({
      complete: () => {
        this.UserForm.reset();
        this.router.navigate(['/home']);
      }
    });
  }

  

}
