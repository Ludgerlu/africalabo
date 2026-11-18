import { Component } from '@angular/core';
import { testimonials } from '../data/content';

@Component({
  selector: 'app-testimonials',
  template: `
    <section class="py-5" id="testimonials" style="background:var(--grey);">
      <div class="container">
        <span class="eyebrow" data-aos="fade-up">Témoignages</span>
        <h2 class="section-title" data-aos="fade-up">Ce que nos clients disent</h2>
        <p class="text-secondary" style="max-width:56ch;" data-aos="fade-up">Des retours d'expérience de partenaires qui nous font confiance.</p>
        <div class="row g-4 mt-2">
          @for (t of testimonials; track t.name) {
            <div class="col-md-4" data-aos="fade-up" [attr.data-aos-delay]="t.delay || null">
              <div class="testimonial-card">
                <div class="quote">{{ t.quote }}</div>
                <div class="author d-flex align-items-center gap-2">
                  <div class="avatar"><img [src]="t.avatar" [alt]="t.name" loading="lazy" /></div>
                  <div><div class="fw-bold">{{ t.name }}</div><div class="mono small text-secondary">{{ t.role }}</div></div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Testimonials {
  protected readonly testimonials = testimonials;
}
