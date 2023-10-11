import { Component } from '@angular/core';
import { faUserGroup, faAddressCard, faShield, faCommentDots, faCloudArrowDown, faBullhorn , faBookOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  UserGroup = faUserGroup;
  AddressCard = faAddressCard;
  Shield = faShield;
  CommentDots = faCommentDots;
  CloudArrowDown = faCloudArrowDown;
  Bullhorn = faBullhorn;
  BookOpen = faBookOpen;
}
