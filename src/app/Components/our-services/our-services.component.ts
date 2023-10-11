import { Component } from '@angular/core';
import { faHammer, faFileCode, faPeopleArrowsLeftRight, faChartLine, faUserTie, faListCheck , faLightbulb} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  FileCode = faFileCode;
  Code = faPeopleArrowsLeftRight;
  resource = faLightbulb;
  ChartLine = faChartLine;
  UserTie = faUserTie;
  ListCheck = faListCheck;
  
  
  Hammer = faHammer;
}
