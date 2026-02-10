import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
    if (location.pathname === '/' || location.pathname === '') {
      this.router.navigate(['/home']);
    }
  }
}