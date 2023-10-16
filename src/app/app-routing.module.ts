import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions/admissions.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { MiddlelayerComponent } from './Components/middlelayer/middlelayer.component';

const routes: Routes = [
 {path: '',  component : HomepageComponent},
//  {path: 'Home', component : FooterComponent },
 {path: 'admissions', component : AdmissionsComponent},
 {path:'Services', component:OurServicesComponent},
 { path: 'About', component:MiddlelayerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
