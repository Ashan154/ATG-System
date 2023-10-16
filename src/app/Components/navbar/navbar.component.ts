import { Component , ElementRef, Renderer2} from '@angular/core';
import { scrollToSection } from '../shared/scroll-helper';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrollToSection = scrollToSection;

}
