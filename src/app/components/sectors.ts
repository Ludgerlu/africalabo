import { Component } from '@angular/core';
import { sectors } from '../data/content';

@Component({
  selector: 'app-sectors',
  template: `
    <section class="py-5" id="secteurs">
      <div class="container">
        <span class="eyebrow" data-aos="fade-up">Secteurs</span>
        <h2 class="section-title" data-aos="fade-up">Qui accompagnons-nous ?</h2>
        <div class="row g-3 mt-3">
          @for (s of sectors; track s.title) {
            <div class="col-md-3" data-aos="fade-up" [attr.data-aos-delay]="s.delay || null">
              <div class="sector-chip"><span class="ic" aria-hidden="true">{{ s.icon }}</span><div><h6>{{ s.title }}</h6><span>{{ s.sub }}</span></div></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Sectors {
  protected readonly sectors = sectors;
}
