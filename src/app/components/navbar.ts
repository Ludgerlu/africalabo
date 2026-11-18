import { Component, signal } from '@angular/core';
import { COMPANY, LOGO, navLinks } from '../data/content';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom" style="border-color:#E7EAE6;">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#" aria-label="AFRICA-LABO, accueil">
          <img [src]="logo" alt="Logo AFRICA-LABO SARL" style="width:42px;height:42px;object-fit:contain;border-radius:8px;" />
          <span class="d-flex flex-column lh-sm">
            <span class="fw-bold" style="font-size:1.05rem;">{{ company }}</span>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="mainNav"
          [attr.aria-expanded]="open()"
          aria-label="Ouvrir le menu"
          (click)="open.set(!open())"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [class.show]="open()" id="mainNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-3">
            @for (l of links; track l.href) {
              <li class="nav-item"><a class="nav-link fw-semibold" [href]="l.href" (click)="open.set(false)">{{ l.label }}</a></li>
            }
            <li class="nav-item"><a href="#contact" class="pill-btn" (click)="open.set(false)">Demander un devis</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class Navbar {
  protected readonly open = signal(false);
  protected readonly links = navLinks;
  protected readonly logo = LOGO;
  protected readonly company = COMPANY;
}
