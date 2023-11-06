import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  images: string[] = [
    'assets/images/spartaan.png',
    'assets/images/SPARTAN.png',
    'assets/images/logo_text.png'
  ];
  successMessage: boolean = false;
  errorMessage: boolean = false;
  loaded: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }

  authenticate() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (username === 'admin' && password === '12345') {
      this.successMessage = true;
      this.errorMessage = false;
    } else {
      this.successMessage = false;
      this.errorMessage = true;
    }

    setTimeout(() => {
      this.successMessage = false;
      this.errorMessage = false;
    }, 5000);
  }
}
