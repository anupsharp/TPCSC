import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-floating-popup',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './floating-popup.component.html',
  styleUrl: './floating-popup.component.css'
})
export class FloatingPopupComponent {
  isPopupVisible: boolean = false;
  faPhone = faPhone
  faWhatsapp = faWhatsapp
   faArrowUp = faArrowUp;
    showPopup = false;
  showScrollTopButton = false;

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  @HostListener('document:click', ['$event'])
  closePopup(event: Event): void {
    const target = event.target as HTMLElement;
    const isButton = target.closest('.floating-popup');
    const isPopup = target.closest('.popup-content');
    if (!isButton && !isPopup) {
      this.isPopupVisible = false;
    }
  }


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopButton = window.scrollY > 200;
  }
}



