import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SERVICES_DATA } from '../../../service-data';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [MatCardModule,CommonModule,MatIconModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
 services = SERVICES_DATA;
}
