import { Component } from '@angular/core';
import { HeadersComponent } from '../headers/headers.component';

@Component({
  selector: 'app-contact-us',
  imports: [HeadersComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
 email: string = 'info@ghamandilassi.com';
}
