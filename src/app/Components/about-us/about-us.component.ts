import { Component } from '@angular/core';
import { faUser, faWrench, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  User = faUser;
  Wrench = faWrench;
  PaperPlane = faPaperPlane
}
