import { Component, HostListener } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { FloatingPopupComponent } from '../app/floating-popup/floating-popup.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from "@angular/material/table"
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from './service-data';
import { WhyUsPart } from './whyuspart';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from "@angular/material/list"
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    FontAwesomeModule, FloatingPopupComponent, MatToolbarModule, MatButtonModule, MatCardModule,
    MatIconModule,
    MatTableModule,
    CommonModule,
    MatGridListModule,
    MatListModule,
    CdkAccordionModule,
    MatExpansionModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TPCSC';

  showPopup = false;
  showScrollTopButton = false;
  faArrowUp = faArrowUp


  ratings = [{
    url: "https://g.page/r/CZhpJE5XXvoZEBM",
    image: "/assets/google-my-business-logo.svg",
    name: "google business"
  }, {
    url: "https://jsdl.in/DT-246RGKA1KNC",
    image: "/assets/justdial-seeklogo.svg",
    name: "Justdial"
  }]
  socialIcons = [faInstagram, faFacebook, faYoutube, faLinkedin, faMapMarkerAlt, faStore]

  socialLinks = [
    'https://www.instagram.com/yourpage',
    'https://www.facebook.com/yourpage',
    'https://www.youtube.com/yourchannel',
    'https://www.linkedin.com/in/yourprofile',
    'https://maps.app.goo.gl/okeU7D84UYfwDTBz5',
    'https://www.indiamart.com/yourpage'
  ];


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

   @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopButton = window.scrollY > 200;
  }

}
