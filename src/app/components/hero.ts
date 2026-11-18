import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-6" data-aos="fade-right">
            <span class="badge bg-warning text-dark mb-3 px-3 py-2" style="background:var(--lime)!important;font-weight:700;">Distributeur agréé — Cameroun</span>
            <h1 class="display-4 fw-bold">Produits médicaux, pharmaceutiques <span style="color:var(--green);">et Cosmétiques.</span></h1>
            <p class="fs-5 text-secondary" style="max-width:44ch;">AFRICA-LABO SARL est spécialisée dans l'import et la vente d'équipements pharmaceutiques et médicaux destinés aux cliniques, hôpitaux et structures de santé au Cameroun.</p>
            <div class="d-flex gap-3 flex-wrap">
              <a href="#services" class="btn-primary-custom">Voir le catalogue</a>
              <a href="#contact" class="btn-ghost-custom">Nous contacter</a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="150">
            <div class="hero-image"><img src="images/africalabo1.jpg" alt="Laboratoire et équipements" width="612" height="413" /></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
