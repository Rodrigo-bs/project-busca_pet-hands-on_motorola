import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet';
import { Race } from 'src/app/models/Race';
import { PetService } from 'src/app/services/pet.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-pet-feed',
  templateUrl: './pet-feed.component.html',
  styleUrls: [
    'pet-feed.component.css'
  ]
})
export class PetFeedComponent implements OnInit {


  pets: Pet[] = Array<Pet>();
  racas: any = {};
  searchText: any;

  constructor(
    private http: HttpClient,
    private petService: PetService,
    private raceService: RaceService
  ) {
    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
   }

  public getAllPets(): void {
    this.petService.selectAllPets().subscribe(
      (data: any) => {
        data.forEach((pet: Pet) => {
          this.pets.push(pet);
        });
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

  ngOnInit(): void {
    this.getAllRace();
    this.getAllPets();

    console.log(this.racas);
  }

}
