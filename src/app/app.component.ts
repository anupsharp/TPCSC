import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { FloatingPopupComponent } from '../app/floating-popup/floating-popup.component'

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule,FloatingPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TPCSC';
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faMapMarkerAlt = faMapMarkerAlt;
  faStore = faStore;
}
