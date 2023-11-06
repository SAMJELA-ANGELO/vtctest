import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  images: string[] = [
    'assets/images/spartaan.png',
    'assets/images/SPARTAN.png',
    'assets/images/logo_text.png'
  ];
  images2: string[] = [
    'assets/images/spartaan.png',
    'assets/images/img.png',
    'assets/images/logo_text.png'
  ];
  loaded = false;
  selectedLanguage = 'fr';

  // @ViewChild('loginContainer', { read: ViewContainerRef }) loginContainer!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fadeInImages();
    setTimeout(() => {
      this.loaded = true;
    }, this.images.length * 2000);
  }

  fadeInImages(): void {
    const imageElements = document.querySelectorAll('.fade-in-delay-1, .fade-in-delay-2');
    imageElements.forEach((element, index) => {
      element.classList.add(`fade-in-delay-${index + 1}`);
    });
  }

  onLanguageChange(event: any) {
    const language = event.target.value;
    if (language === 'fr') {
      this.router.navigate(['/login']);
    }
  }
}
