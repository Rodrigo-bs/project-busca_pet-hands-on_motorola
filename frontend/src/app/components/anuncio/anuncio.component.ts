import { MessagesService } from './../../services/messages.service';
import { AdService } from 'src/app/services/ad.service';
import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/Ad';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TypeAd } from 'src/app/models/TypeAd';
import { Router } from '@angular/router';
import { AdTypesService } from 'src/app/services/ad-types.service';
import { UserService } from 'src/app/services/user.service';
import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-ad',
  templateUrl: './anuncio.component.html',
  styleUrls: [
    'anuncio.component.css'
  ]
})
export class AnuncioComponent implements OnInit {

  public adForm!: FormGroup;
  public adTypes!: Array<TypeAd>;
  public myPets: Array<Pet> = [];

  constructor(
    private ad: AdService,
    private router: Router,
    private adTypeService: AdTypesService,
    private userService: UserService,
    private messagesService: MessagesService
  ) {
    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
   }

  private registro: Ad = <Ad>{};
  private userInfos: any = JSON.parse(localStorage.getItem('user') as string);
  private token: string = localStorage.getItem('token') as string;

  public adId: number = 0;

  ngOnInit(): void {
    this.setMyPosition();
    this.bindEvents();
    this.checkCEP();

    const haveAnyPedingAd = this.userService.getPedingAd(this.userInfos.id.toString(), this.token).subscribe(
      (data: any) => {
        this.adId = data.id_ad
      },
      (error) => {
        if (error.error.error == 'get-002') {
          this.registro.ad_title = 'pendente'
          this.registro.ad_description = 'Pendente'
          this.registro.ad_photos = 'Pendente'
          this.registro.ad_recompense = 'Pendente'
          this.registro.ad_latitude = 0
          this.registro.ad_longitude = 0
          this.registro.ad_address = '{}'
          this.registro.id_type_ad_fk = '1'
          this.registro.id_pet_fk = 1
          this.registro.id_user_fk = this.userInfos.id

          this.ad.insertNewAd(this.registro, this.token).subscribe();
        }
      }
    )

    this.adForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photos: new FormControl(''),
      typeAd: new FormControl('', [Validators.required]),
      cep: new FormControl(''),
      road: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      house_number: new FormControl('', [Validators.required]),
      recompense: new FormControl(''),
      pet: new FormControl('', [Validators.required])
    });

    const idUser: string = this.userInfos.id;

    this.getMyPets(idUser);
    this.toggleRecompenseInput();

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  get title(): AbstractControl {
    return this.adForm.get('title')!;
  }

  get description(): AbstractControl {
    return this.adForm.get('description')!;
  }

  get photos(): AbstractControl {
    return this.adForm.get('photos')!;
  }

  get typeAd(): AbstractControl {
    return this.adForm.get('typeAd')!;
  }

  get cep(): AbstractControl | null{
    return this.adForm.get('cep');
  }

  get road(): AbstractControl {
    return this.adForm.get('road')!;
  }

  get bairro(): AbstractControl {
    return this.adForm.get('bairro')!;
  }

  get house_number(): AbstractControl {
    return this.adForm.get('house_number')!;
  }

  get recompense(): AbstractControl | null{
    return this.adForm.get('recompense');
  }

  get pet(): AbstractControl{
    return this.adForm.get('pet')!;
  }

  public getMyPets(idUser: string): void {
    const token: string = localStorage.getItem('token') as string;

    this.userService.getMyPets(idUser, token).subscribe(
      (data: any) => {
        data.forEach((pet: Pet) => {
          this.myPets.push(pet);
        })
      }
    );
  }

  public setMyPosition(): void {
    if (!navigator.geolocation) {
      window.alert('O seu navegador não suporta a Geolocalização, por favor atualize seu navedor!');
      this.router.navigate(['/home']);
    }

    navigator.geolocation.getCurrentPosition((position) => {
      let lat: number = position.coords.latitude;
      let logn: number = position.coords.longitude;

      this.registro.ad_latitude = lat;
      this.registro.ad_longitude = logn

    }, (error) => {
      window.alert('Habilite a permissão para acessar a localização');
      this.router.navigate(['/home']);
    });
  }

  public toggleRecompenseInput(): void {
    const checkboxButton = document.querySelector('.checkbox-box input[type="checkbox"]');

    checkboxButton?.addEventListener('click', (event) => {

    });
  }

  public checkCEP(): void {
    const inputCep: any = document.querySelector('#ad_cep');

    const inputBairro: any = document.querySelector('#ad_bairro');
    const inputRua: any = document.querySelector('#ad_rua');


    inputCep?.addEventListener('input', (e: Event) => {
      const inputValueLength = inputCep.value.length;
      let enderecoObj: any = {};

      if (inputValueLength >= 8) {
        if (inputValueLength > 8) {
          inputCep.value = inputCep.value.substring(0, inputCep.value.length - 1);
        }

        enderecoObj = this.apiCep(inputCep.value);

        enderecoObj.then((r: any) => {
          inputBairro.value = r.bairro || '';
          inputRua.value = r.logradouro || '';
        })

      }
    });
  }

  public apiCep(cep: string): any {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(r => r.json())
      .then(r => {
        return {
          bairro: r.bairro,
          logradouro: r.logradouro
        };
      })
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const imgLabel: any = document.querySelector('[data-image-form="label"]');

    this.ad.savePhoto(file, this.adId.toString(), this.token).subscribe(
      (data: any) => {
        imgLabel.classList.add('active');
        imgLabel.style.backgroundImage = `url(http://localhost:5000/images/tmp/${data})`;
      }
    );
  }

  public insertValuesIntoTheInterface() {
    const user: any = JSON.parse(localStorage.getItem('user') as string);
    this.setMyPosition();

    this.registro.ad_title = this.title.value;
    this.registro.ad_description = this.description.value;
    this.registro.ad_recompense = this.recompense!.value ? this.description!.value : 'Sem Recompensa'
    this.registro.ad_latitude = this.registro.ad_latitude;
    this.registro.ad_longitude = this.registro.ad_longitude;
    this.registro.ad_address = `{"cep": "${this.cep!.value}", "bairro": "${this.bairro!.value}", "rua": "${this.road!.value}", "numero": "${this.house_number!.value}"}`;
    this.registro.id_type_ad_fk = this.typeAd.value;
    this.registro.id_pet_fk = parseInt(this.pet.value);
    this.registro.id_user_fk = user.id;
  }

  public bindEvents(): void {
    this.checkCEP = this.checkCEP.bind(this);
  }

  submit(): void {
    if (this.adForm.invalid) return;

    this.insertValuesIntoTheInterface();

    this.ad.insertNewAd(this.registro, this.token).subscribe({
      complete: () => {
        this.adForm.reset();

        this.messagesService.add('Anuncio cadastrado com Sucesso!');
        this.router.navigate(['pet/pet-feed']);

      }
    });
  }
}
