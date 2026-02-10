import { Component } from '@angular/core';
import { HeadersComponent } from '../headers/headers.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeadersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
