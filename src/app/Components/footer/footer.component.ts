import { Component } from '@angular/core';
import { faLocationDot , faPhone , faEnvelope , faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '../shared/scroll-helper';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  scrollToSection = scrollToSection;

  Location = faLocationDot
  phone = faPhone
  mail = faEnvelope
  send= faPaperPlane
  
  
}
