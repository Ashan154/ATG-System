import { Component , ElementRef, Renderer2} from '@angular/core';
import { scrollToSection } from '../shared/scroll-helper';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrollToSection = scrollToSection;

// constructor(private renderer: Renderer2) {}

// scrollToAboutUs() {
//   const aboutUsElement = document.getElementById('aboutUs');
//   if (aboutUsElement) {
//     const yOffset = aboutUsElement.getBoundingClientRect().top;
//     const headerHeight = 60; // Replace this with your header's actual height in pixels
//     const offset = yOffset - headerHeight;
//     if (offset > 0) {
//       window.scrollTo({ top: offset, behavior: 'smooth' });
//     }
//   }
// }
// scrollToServices() {
//   const servicesElement = document.getElementById('Services'); // Replace with the actual ID of your Services section
//   if (servicesElement) {
//     const yOffset = servicesElement.getBoundingClientRect().top;
//     const headerHeight = 60; // Replace with your header's actual height in pixels
//     const offset = yOffset - headerHeight;
//     if (offset > 0) {
//       window.scrollTo({ top: offset, behavior: 'smooth' });
//     }
//   }
// }

}
