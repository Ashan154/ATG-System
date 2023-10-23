import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions/admissions.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { MiddlelayerComponent } from './Components/middlelayer/middlelayer.component';
import { AdsComponent } from './Adsmodule/ads/ads.component';
import { InstitutesComponent } from './Institutes/institutes/institutes.component';
import { DonationComponent } from './Bookdonation/donation/donation.component';

const routes: Routes = [
 {path: '',  component : HomepageComponent},
//  {path: 'Home', component : FooterComponent },
 {path: 'admissions', component : AdmissionsComponent},
 {path:'Services', component:OurServicesComponent},
 { path: 'About', component:MiddlelayerComponent },
 { path: 'Ads', component:AdsComponent },
 { path: 'Institutes', component:InstitutesComponent },
 { path: 'Donation', component:DonationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
