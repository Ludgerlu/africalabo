import { Component } from '@angular/core';
import { categories } from '../data/content';

@Component({
  selector: 'app-catalog',
  template: `
    <section class="py-5" id="services" style="background:var(--grey);">
      <div class="container">
        <span class="eyebrow" data-aos="fade-up">Catalogue produits</span>
        <h2 class="section-title" data-aos="fade-up">Nos catégories phares</h2>
        <p class="text-secondary" style="max-width:56ch;" data-aos="fade-up">Des matériels d'emballage et bien d'autres équipements pour laboratoires, industries et professionnels.</p>
        <div class="row g-4 mt-2">
          @for (c of categories; track c.code) {
            <div class="col-md-4" data-aos="zoom-in" [attr.data-aos-delay]="c.delay || null">
              <div class="cat-card" [style.background]="c.bg">
                <img [src]="c.img" [alt]="c.alt" class="cat-img" loading="lazy" />
                <div><span class="code">{{ c.code }}</span><h4>{{ c.title }}</h4><p>{{ c.text }}</p></div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Catalog {
  protected readonly categories = categories;
}
