import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  imports: [MatGridListModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private dialog: MatDialog) {}
  
 images: string[] = Array.from({ length: 14 }, (_, i) => `assets/carousalimgaes/${i + 1}.jpg`);

 openImageDialog(image: string): void {
  this.dialog.open(ImageDialogComponent, {
    data: { image },
    panelClass: 'custom-dialog-container'
  });
}
}
