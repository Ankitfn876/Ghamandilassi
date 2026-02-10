import { Component } from '@angular/core';
import { HeadersComponent } from '../headers/headers.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeadersComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
