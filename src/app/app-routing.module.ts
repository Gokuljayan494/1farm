import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewFarmHouseComponent } from './add-new-farm-house/add-new-farm-house.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { FarmTourComponent } from './farm-tour/farm-tour.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisteredUsersComponent } from '../app/registered-users/registered-users.component';
import { FeaturesComponent } from './features/features.component';
import { AddNewActivitiesComponent } from './add-new-activities/add-new-activities.component';
const routes: Routes = [
  { path: '', redirectTo: 'loginPage', pathMatch: 'full' },

  { path: 'main', component: MainComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addNewFarm', component: AddNewFarmHouseComponent },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'farmTour', component: FarmTourComponent },
  { path: 'edit/:_id', component: EditTourComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'addActivities', component: AddNewActivitiesComponent },

  //
  { path: 'RegisteredUsers', component: RegisteredUsersComponent },
  // {path:'dashboard',component:DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
