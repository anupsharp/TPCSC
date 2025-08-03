import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-floating-popup',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './floating-popup.component.html',
  styleUrl: './floating-popup.component.css'
})
export class FloatingPopupComponent {
  faPhone = faPhone
  faWhatsapp = faWhatsapp
}



