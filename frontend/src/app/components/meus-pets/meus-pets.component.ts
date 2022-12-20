import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet';
import { Race } from 'src/app/models/Race';
import { RaceService } from 'src/app/services/race.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.css']
})
export class MeusPetsComponent implements OnInit {

  public myPets: Array<Pet> = [];
  racas: any = {};

  constructor(
      private userService: UserService,
      private raceService: RaceService
    ) {
    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
   }
  private userInfos: any = JSON.parse(localStorage.getItem('user') as string);

  ngOnInit(): void {

    const idUser: string = this.userInfos.id;

    this.getMyPets(idUser);
    this.getAllRace();
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

  public getAllRace(): void {
    this.raceService.selectAllRaces().subscribe(
      (data: any) => {
        data.forEach((race: Race) => {
          this.racas[race.id_race] = race;
        })
      }
    );
  }
}
