import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { FloatingPopupComponent } from '../app/floating-popup/floating-popup.component'
import {MatToolbarModule} from  '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule}  from  '@angular/material/icon'
import { MatTableModule } from "@angular/material/table"
import {MatCardModule} from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from './service-data';
import { WhyUsPart } from './whyuspart';
import {MatGridListModule} from '@angular/material/grid-list'; 
import{MatListModule} from "@angular/material/list"

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule,FloatingPopupComponent,MatToolbarModule,MatButtonModule,MatCardModule,
    MatIconModule,
    MatTableModule,
  CommonModule,
MatGridListModule,
MatListModule],
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
  services = SERVICES_DATA;
  whyUsPoints = WhyUsPart;
}
