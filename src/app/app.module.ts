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
import { FilterComponent } from './Components/filter/filter.component';
import { FilterComponentComponent } from './Components/filter-component/filter-component.component';
import{NgxPaginationModule}from'ngx-pagination';






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
    FilterComponent,
    FilterComponentComponent,
    
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
