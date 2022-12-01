import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddNewFarmHouseComponent } from './add-new-farm-house/add-new-farm-house.component';
import { LoginComponent } from './login/login.component';
import { FarmTourComponent } from './farm-tour/farm-tour.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmService } from './farm.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FeaturesComponent } from './features/features.component';
import { AddNewActivitiesComponent } from './add-new-activities/add-new-activities.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    MainComponent,
    DashboardComponent,
    AddNewFarmHouseComponent,
    LoginComponent,
    FarmTourComponent,
    EditTourComponent,
    LoginPageComponent,
    RegisteredUsersComponent,
    ActivitiesComponent,
    FeaturesComponent,
    AddNewActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [FarmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
