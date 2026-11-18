import { Component, afterNextRender } from '@angular/core';
import AOS from 'aos';
import { About } from './components/about';
import { Catalog } from './components/catalog';
import { Contact } from './components/contact';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { Sectors } from './components/sectors';
import { SiteFooter } from './components/site-footer';
import { Testimonials } from './components/testimonials';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Catalog, Sectors, Testimonials, Contact, SiteFooter],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-catalog />
      <app-sectors />
      <app-testimonials />
      <app-contact />
    </main>
    <app-site-footer />
  `,
})
export class App {
  constructor() {
    afterNextRender(() => AOS.init({ once: true, duration: 700, easing: 'ease-out-back', offset: 50 }));
  }
}
