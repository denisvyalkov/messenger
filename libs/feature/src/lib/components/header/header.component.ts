import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'messenger-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(private router: Router) {}
  navigate(path: string): void {
    this.router.navigateByUrl(path).then((r) => console.log(r));
  }
}
