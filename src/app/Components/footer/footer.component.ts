import { Component } from '@angular/core';
import { faLocationDot , faPhone , faEnvelope , faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Location = faLocationDot
  phone = faPhone
  mail = faEnvelope
  send= faPaperPlane
  
  
}
