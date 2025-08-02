import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ContactComponent } from './contact/contact.component';
import { TestmonialComponent } from './testmonials/testmonials.component';





@Component({
  selector: 'app-home',
  imports: [ContactComponent,AnniversaryComponent,ProjectsComponent,ServicesComponent,AboutComponent,TestmonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
