import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-floating-popup',
  imports: [CommonModule],
  templateUrl: './floating-popup.component.html',
  styleUrl: './floating-popup.component.css'
})
export class FloatingPopupComponent {
  isPopupVisible: boolean = false;

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
}


