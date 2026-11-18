import { Component } from '@angular/core';
import { stats } from '../data/content';

@Component({
  selector: 'app-about',
  template: `
    <section class="py-5" id="about">
      <div class="container">
        <div class="row g-4">
          <div class="col-12" data-aos="fade-up">
            <span class="eyebrow">Qui sommes-nous</span>
            <h2 class="section-title">Votre partenaire de confiance</h2>
          </div>
          <div class="col-lg-6" data-aos="fade-right">
            <div class="about-text">
              <p class="text-secondary">AFRICA-LABO SARL est une entreprise camerounaise spécialisée dans la fourniture de matériels d'emballage, d'équipements et de consommables pour les laboratoires, l'industrie pharmaceutique, l'agroalimentaire et les structures de santé.</p>
              <p class="text-secondary">Basée à Douala, nous mettons notre expertise et notre réseau logistique au service de nos clients pour garantir des livraisons rapides et des produits de haute qualité, conformes aux normes internationales.</p>
              <div class="about-stats d-flex gap-4 flex-wrap mt-4">
                @for (s of stats; track s.label) {
                  <div><span class="number">{{ s.number }}</span><span class="label">{{ s.label }}</span></div>
                }
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="about-image"><img src="images/africalabo2.jpg" alt="Entrepôt et logistique" loading="lazy" width="612" height="408" /></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly stats = stats;
}
