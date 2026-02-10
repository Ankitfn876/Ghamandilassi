import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
   templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {
constructor(private route: Router) {}
  gohome(): void {
    this.route.navigate(['/home']);
  }
  gofranchise(): void {
    this.route.navigate(['/franchise']);
  }
  gocontact(): void {
    this.route.navigate(['/contact']);
  }
}
