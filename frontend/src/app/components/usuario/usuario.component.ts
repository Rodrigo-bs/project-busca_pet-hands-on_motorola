import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [
    './usuario-component.css',
  ]
})
export class UsuarioComponent implements OnInit {
  public usuarioForm!: FormGroup;
  public myUsers: Array<User> = [];
  users: User[] = Array<User>();

submit() {
throw new Error('Method not implemented.');
}

public registro: User = <User>{};
  constructor(private userService: UserService) { 

    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
    
  }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      photo: new FormControl(''),

    });
    this.getMyUser();

    this.toggleRecompenseInput();
  }

  public toggleRecompenseInput(): void {
    const checkboxButton = document.querySelector('.checkbox-box input[type="checkbox"]');

    checkboxButton?.addEventListener('click', (event) => {

    });
  }

  public getvaluesInterface() {
    const user: any = JSON.parse(localStorage.getItem('user') as string);

    //this.registro.id_user= this.name.value;
    this.registro.user_name= this.name.value;
    this.registro.user_email = this.email.value;
    this.registro.user_password = this.password.value;
    this.registro.user_cpf = this.cpf.value;
    this.registro.user_phone = this.phone.value;
  }
  


  public getMyUser(): void {
    
    const userid: any = JSON.parse(localStorage.getItem('user')||'');
    const token: string = localStorage.getItem('token') || '';

    this.userService.getMyUser(userid.id, token).subscribe(
      (data: any) => {
        data.forEach((user: User) => {
          this.users.push(user);
        });
      }
    );
  }
  

  get name(): AbstractControl {
    return this.usuarioForm.get('name')!;
  }
  get email(): AbstractControl {
    return this.usuarioForm.get('email')!;
  }
  get password(): AbstractControl {
    return this.usuarioForm.get('password')!;
  }
  get cpf(): AbstractControl {
    return this.usuarioForm.get('cpf')!;
  }
  get phone(): AbstractControl {
    return this.usuarioForm.get('phone')!;
  }
  get photo(): AbstractControl | null {
    return this.usuarioForm.get('photo')!;
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.usuarioForm.patchValue({ photo: file })
  }

}
