import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Color } from 'src/app/models/Color';
import { Fur } from 'src/app/models/Fur';
import { Pet } from 'src/app/models/Pet';
import { Race } from 'src/app/models/Race';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { ColorService } from 'src/app/services/color.service';
import { FurService } from 'src/app/services/fur.service';
import { PetService } from 'src/app/services/pet.service';
import { RaceService } from 'src/app/services/race.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: [
    './pet-form-component.css',
  ]
})
export class PetFormComponent implements OnInit {

  public petForm!: FormGroup;
  public races: Array<Race> = [];
  public categorys: Array<Category> = [];
  public furs: Array<Fur> = [];
  public colors: Array<Color> = [];

  constructor(
    private pet: PetService,
    private user: UserService,
    private raceService: RaceService,
    private categoryService: CategoryService,
    private furService: FurService,
    private colorService: ColorService,
    private router: Router,
    private messagesService: MessagesService
  ) {
    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
  }

  public registro: Pet = <Pet>{};
  public token: string  = localStorage.getItem('token') as string;
  public userInfos: any = JSON.parse(localStorage.getItem('user') as string);

  public petId = 0;

  ngOnInit(): void {
    const haveAnyPedingPet = this.user.getPedingPet(this.userInfos.id.toString(), this.token).subscribe(
      (data: any) => {
        this.petId = data.id_pet
      },
      (error) => {
        if (error.error.error == 'get-002') {
          this.registro.pet_name = 'Pendente';
          this.registro.pet_description = 'Pendente';
          this.registro.pet_photo = 'Pendente';
          this.registro.pet_lost = 1;
          this.registro.id_color_pelagem_fk = 1;
          this.registro.id_fur_fk = 1;
          this.registro.id_category_fk = 1;
          this.registro.id_race_fk = 1;
          this.registro.id_user_fk = this.userInfos.id;

          this.pet.insertNewPet(this.registro, this.token).subscribe();
        }
      }
    )

    this.petForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      photo: new FormControl(''),
      is_lost: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      fur: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
    });

    this.getAllColors();
    this.getAllFurs();
    this.getAllRaces();
    this.getAllCategorys();
  }

  get name(): AbstractControl {
    return this.petForm.get('name')!;
  }

  get description(): AbstractControl | null {
    return this.petForm.get('description');
  }

  get is_lost(): AbstractControl {
    return this.petForm.get('is_lost')!;
  }

  get color(): AbstractControl {
    return this.petForm.get('color')!;
  }

  get fur(): AbstractControl {
    return this.petForm.get('fur')!;
  }

  get category(): AbstractControl {
    return this.petForm.get('category')!;
  }

  get race(): AbstractControl {
    return this.petForm.get('race')!;
  }

  public getAllColors(): void {
    this.colorService.selectAllColors().subscribe(
      (data: any) => {
        data.forEach((color: Color) => {
          this.colors.push(color);
        });
      }
    );
  }

  public getAllFurs(): void {
    this.furService.selectAllFurs().subscribe(
      (data: any) => {
        data.forEach((fur: Fur) => {
          this.furs.push(fur);
        });
      }
    );
  }

  public getAllRaces(): void {
    this.raceService.selectAllRaces().subscribe(
      (data: any) => {
        data.forEach((race: Race) => {
          this.races.push(race);
        });
      }
    );
  }

  public getAllCategorys(): void {
    this.categoryService.selectAllCategorys().subscribe(
      (data: any) => {
        data.forEach((category: Category) => {
          this.categorys.push(category);
        });
      }
    );
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const imgLabel: any = document.querySelector('[data-image-form="label"]');

    this.pet.savePhoto(file, this.petId.toString(), this.token).subscribe(
      (data: any) => {
        imgLabel.classList.add('active');
        imgLabel.style.backgroundImage = `url(http://localhost:5000/images/tmp/${data})`;
      }
    );
  }

  public insertValuesIntoTheInterface() {
    this.registro.pet_name = this.name.value;
    this.registro.pet_description = this.description!.value ? this.description!.value : 'Sem descrição';
    this.registro.pet_lost = this.is_lost.value;
    this.registro.id_color_pelagem_fk = this.color.value;
    this.registro.id_fur_fk = this.fur.value;
    this.registro.id_category_fk = this.category.value;
    this.registro.id_race_fk = this.race.value;
    this.registro.id_user_fk = this.userInfos.id;
  }

  public submit(): void {
    if (this.petForm.invalid) return;

    this.insertValuesIntoTheInterface();

    this.pet.insertNewPet(this.registro, this.token).subscribe({
      complete: () => {
        this.petForm.reset();
        this.messagesService.add('Pet Adicionado com Sucesso!');
        
        alert('Pet Cadastrado!');
        this.router.navigate(['pets/meusPets']);
      }
    });
  }
}
