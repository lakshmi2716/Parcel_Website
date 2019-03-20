import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { OrderentryformComponent } from './orderentryform/orderentryform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule,MatDatepickerModule, MatNativeDateModule ,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher  } from '@angular/material';
import { ShipmentComponent } from './shipment/shipment.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LaneComponent } from './lane/lane.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { SharedataService } from './sharedata.service';
import { HttpClientModule } from '@angular/common/http'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { FilterPipe } from './filter.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchComponent } from './search/search.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {AuthGuard} from './auth.guard';
import {Authservice} from './authservice.service';
import { BrandaddComponent } from './brandadd/brandadd.component';
import {MatTabsModule} from '@angular/material/tabs';
import {TabchangeService} from './tabchange.service';
import { DashboarddetailsComponent } from './dashboarddetails/dashboarddetails.component';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    OrderentryformComponent,
    ShipmentComponent,
    LaneComponent   ,
    DashboardComponent,
    FilterPipe,
    SearchComponent,
    HomeComponent,
    SigninComponent,
    BrandaddComponent,
    DashboarddetailsComponent,
    CartComponent,
    OrderconfirmationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule,
    MatAutocompleteModule,    
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
   
    
  ],
  providers: [ {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ,AuthGuard,
    Authservice,SharedataService,TabchangeService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
