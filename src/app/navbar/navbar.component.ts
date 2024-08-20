import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Add CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      const scrollTop = window.scrollY;
      this.isScrolled = scrollTop > 50;
    }
  }

  scrollToSection(sectionId: string) {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
