import { Component } from '@angular/core';
import { COMPANY, LOGO } from '../data/content';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer>
      <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <span class="d-flex align-items-center gap-2">
          <img [src]="logo" alt="Logo AFRICA-LABO SARL" style="width:22px;height:22px;object-fit:contain;border-radius:5px;" />
          © {{ year }} {{ company }}
        </span>
        <span>Douala, Cameroun</span>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly logo = LOGO;
  protected readonly company = COMPANY;
  protected readonly year = new Date().getFullYear();
}
