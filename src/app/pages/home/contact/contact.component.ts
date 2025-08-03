import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule,MatCardModule,MatListModule,MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  statusMessage = '';
  contactForm !: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]

    })
  };

  sendEmail() {
    if (this.contactForm.invalid) return;

    const templateParams = this.contactForm.value;

    emailjs.send(
      'service_b7z73pr',
      'template_lbcou5w',
      templateParams,
    ).then(() => {
      this.statusMessage = 'Message sent successfully!';
      this.contactForm.reset();
    }).catch((error: any) => {
      this.statusMessage = 'Failed to send message.';
      console.error('EmailJS Error:', error);
    });
  }

}
