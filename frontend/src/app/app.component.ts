import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'frontend';
  public isLogged: boolean = false;

  constructor (
    private authService: AuthService,
    private router: Router
  ) { 
    this.tokenIsValid();

    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    menu?.classList.remove('active');
    menuNav?.classList.remove('active');
  }
  
  public tokenIsValid(): void {
    const token: string | null = this.authService.getToken();

    if (!token) {
      this.isLogged = false;
      return;
    }

    this.authService.validToken(token).subscribe(data => this.isLogged = true, error => this.isLogged = false);
  }

  public onLogoutClick(): void {
    this.authService.logout();
  }

  public menuHover(): void {
    const menuItems = document.querySelectorAll('.header-nav_item a');

    menuItems.forEach(item => {
      let elementAcive: HTMLElement;

      item.addEventListener('mouseover', (event: Event) => {
        const element: HTMLElement = event.currentTarget as HTMLElement;
        
        menuItems.forEach(item => {
          if (item.classList.contains('active')) {
              item.classList.remove('active');
              elementAcive = item as HTMLElement;
          }
        })
      })

      item.addEventListener('mouseout', (event) => {
        if (elementAcive) {
          elementAcive.classList.add('active');
        }
      });
    });
  }

  public menuMobile(): void {
    const buttonMenu = document.querySelector('.btn-menu-mobile');
    const buttonMenuClonse = document.querySelector('.btn-menu-close');

    const menu = document.querySelector('.header .header-form-login');
    const menuNav = document.querySelector('.header .header-nav');

    buttonMenu?.addEventListener('click', (event) => {
      menu?.classList.toggle('active');
      menuNav?.classList.toggle('active');
    })

    buttonMenuClonse?.addEventListener('click', (event) => {
      menu?.classList.toggle('active');
      menuNav?.classList.toggle('active');
    })
  }
  
  ngOnInit(): void {
    this.menuHover();
    this.menuMobile();
  }
}
