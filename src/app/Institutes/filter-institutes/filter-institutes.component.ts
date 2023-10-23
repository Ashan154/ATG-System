import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-institutes',
  templateUrl: './filter-institutes.component.html',
  styleUrls: ['./filter-institutes.component.css']
})
export class FilterInstitutesComponent {
  filterValue: string = 'Select Value';
  p: number=1;
  itemsPerPage: number=9;
  totaladmissions:any;
  

  admissions = [
    {
      img : '../../../assets/universities-logo/air-university.png',
      uni_name : 'Air University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/allama-iqbal-university.png',
      uni_name : 'Allama Iqbal Open University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/bahria-university.png',
      uni_name : 'Bahria University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/capital-university.png',
      uni_name : 'Capital University (CUST)',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/federal-urdu-university.png',
      uni_name : 'Federal Urdu University (FUUAST)',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/foundation-university.png',
      uni_name : 'Foundation University (FUSST)',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/health-service-university.png',
      uni_name : 'Health Services Academy',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/ibadat.png',
      uni_name : 'IBADAT University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/space-tech-university.png',
      uni_name : 'Institute of Space Technology',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/IIUI.png',
      uni_name : 'International Islamic University (IIUI)',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/muslim-youth-university.png',
      uni_name : 'Muslim Youth University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/defence-university.png',
      uni_name : 'National Defence University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/skills-university.png',
      uni_name : 'National Skills University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/FAST.png',
      uni_name : 'FAST University Islamabad',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/numl.png',
      uni_name : 'NUML University Islamabad',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/NUST.png',
      uni_name : 'NUST University Islamabad',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/NUTECH.png',
      uni_name : 'National University of Technology',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/pide.png',
      uni_name : 'Pakistan Institute of Development',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/PIEAS.png',
      uni_name : 'PIEAS University Islamabad',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/QAU.png',
      uni_name : 'Quaid-i-Azam University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/RIPHAH.png',
      uni_name : 'Riphah International University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/SZAB-university.png',
      uni_name : 'SZAB Medical University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
    {
      img : '../../../assets/universities-logo/shifa-university.png',
      uni_name : 'Shifa Tameer-e-Millat University',
      city : 'Islamabad',
      btn_text : 'Visit Site' 
    },
  ];

  
  filterData = [
    {
      city  : 'Islamabad', 
    },
    {
      city : 'Rawalpindi', 
    },
    {
      city  : 'Lahore', 
    },
    {
      city : 'Gujranwale', 
    },
    {
      city  : 'Multan', 
    },
    {
      city : 'Rahim Yar Khan', 
    },
    {
      uni_name : 'Bahria University', 
    },
    {
      uni_name : 'Capital University (CUST)', 
    },
    {
      uni_name : 'Federal Urdu University (FUUAST)', 
    },
    {
      uni_name : 'Foundation University (FUSST)', 
    },
    {
      uni_name : 'Health Services Academy', 
    },
    {
      uni_name : 'IBADAT University', 
    },
    {
      uni_name : 'Institute of Space Technology', 
    },
    {
      uni_name : 'International Islamic University (IIUI)',
    },
    {
      uni_name : 'Muslim Youth University', 
    },
    {
      uni_name : 'National Defence University',
    },
    {
      uni_name : 'National Skills University',
    },
    {
      uni_name : 'FAST University Islamabad',
    },
    {
      uni_name : 'NUML University Islamabad',
    },
    {
      uni_name : 'NUST University Islamabad',
    }
  ];

  filteredAdmissions: any[] = [];

  ngOnInit() {
    // Call filterAdmissions() in ngOnInit to load all data initially
    this.filterAdmissions();
  }

  filterAdmissions() {
    if (this.filterValue === 'Select Value') {
      // Show all admissions when 'All' is selected
      this.filteredAdmissions = this.admissions;
    } else {
      // Filter admissions based on the selected filter value
      this.filteredAdmissions = this.admissions.filter(
        (university) => university.city === this.filterValue
      );
    }
  }

}
