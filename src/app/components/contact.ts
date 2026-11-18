import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { contact } from '../data/content';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="container-fluid px-0">
        <div class="row g-0">
          <div class="col-lg-6 contact-left" data-aos="fade-right">
            <h2>Parlons de votre besoin</h2>
            <p>Un projet d'emballage ou d'équipement de laboratoire ? Notre équipe vous répond rapidement.</p>
            <div class="c-row"><span class="k">Contact</span><span>{{ c.person }}</span></div>
            <div class="c-row"><span class="k">Téléphone</span><a [href]="c.phoneHref">{{ c.phoneLabel }}</a></div>
            <div class="c-row"><span class="k">Email</span><a [href]="'mailto:' + c.email">{{ c.email }}</a></div>
            <div class="c-row"><span class="k">Site web</span><a [href]="c.site" target="_blank" rel="noopener">{{ c.siteLabel }}</a></div>
            <div class="c-row"><span class="k">WhatsApp</span><a [href]="c.whatsapp" target="_blank" rel="noopener">Écrire sur WhatsApp</a></div>
            <div class="c-row"><span class="k">Adresse</span><span>{{ c.address }}</span></div>
          </div>
          <div class="col-lg-6 contact-right" data-aos="fade-left" data-aos-delay="150">
            <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
              <div class="field mb-3">
                <label class="fw-bold small" for="cf-name">Nom complet</label>
                <input id="cf-name" type="text" class="form-control" placeholder="Votre nom" formControlName="name" autocomplete="name" [class.is-invalid]="invalid('name')" />
                <div class="invalid-feedback">Veuillez indiquer votre nom.</div>
              </div>
              <div class="field mb-3">
                <label class="fw-bold small" for="cf-email">Email</label>
                <input id="cf-email" type="email" class="form-control" placeholder="vous@exemple.com" formControlName="email" autocomplete="email" [class.is-invalid]="invalid('email')" />
                <div class="invalid-feedback">Veuillez saisir une adresse e-mail valide.</div>
              </div>
              <div class="field mb-3">
                <label class="fw-bold small" for="cf-subject">Sujet</label>
                <input id="cf-subject" type="text" class="form-control" placeholder="Objet de votre demande" formControlName="subject" [class.is-invalid]="invalid('subject')" />
                <div class="invalid-feedback">Veuillez préciser l'objet de votre demande.</div>
              </div>
              <div class="field mb-3">
                <label class="fw-bold small" for="cf-message">Message</label>
                <textarea id="cf-message" class="form-control" rows="4" placeholder="Votre message..." formControlName="message" [class.is-invalid]="invalid('message')"></textarea>
                <div class="invalid-feedback">Votre message doit contenir au moins 10 caractères.</div>
              </div>
              <button type="submit" class="btn-primary-custom">Envoyer le message</button>
              @if (sent()) {
                <p class="mt-3 mb-0 small" role="status" style="color:var(--green-deep);">
                  Merci. Votre formulaire est valide, mais l'envoi n'est pas encore connecté à un service.
                </p>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly c = contact;
  protected readonly sent = signal(false);

  private readonly fb = inject(FormBuilder).nonNullable;
  protected readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected invalid(name: 'name' | 'email' | 'subject' | 'message'): boolean {
    const ctrl = this.form.controls[name];
    return ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }

  protected submit(): void {
    this.sent.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO : brancher ici votre API / backend (PHP, Laravel…) avant mise en production
    this.sent.set(true);
    this.form.reset();
  }
}
