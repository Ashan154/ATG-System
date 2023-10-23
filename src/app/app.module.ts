import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceComponent } from './Components/service/service.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Components/footer/footer.component';
import { MiddlelayerComponent } from './Components/middlelayer/middlelayer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SliderComponent } from './Components/slider/slider.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { AdmissionsComponent } from './admissions/admissions/admissions.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TestFIlterComponent } from './Components/test-filter/test-filter.component';
import { FormsModule } from '@angular/forms';
import{NgxPaginationModule}from'ngx-pagination';
import { FilterSectionComponent } from './admissions/filter-section/filter-section.component';
import { AdsComponent } from './Adsmodule/ads/ads.component';
import { FilterAdsComponent } from './Adsmodule/filter-ads/filter-ads.component';
import { InstitutesComponent } from './Institutes/institutes/institutes.component';
import { FilterInstitutesComponent } from './Institutes/filter-institutes/filter-institutes.component';
import { DonationComponent } from './Bookdonation/donation/donation.component';






@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    FooterComponent,
    MiddlelayerComponent,
    NavbarComponent,
    SliderComponent,
    AboutUsComponent,
    OurServicesComponent,
    HomepageComponent,
    AdmissionsComponent,
    TestFIlterComponent,
    FilterSectionComponent,
    AdsComponent,
    FilterAdsComponent,
    InstitutesComponent,
    FilterInstitutesComponent,
    DonationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
