import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions/admissions.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const routes: Routes = [
 {
  path: '', 
  component : HomepageComponent 
},
//  {path: 'Home', component : FooterComponent },
 {
  path: 'admissions', 
  component : AdmissionsComponent 
},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
