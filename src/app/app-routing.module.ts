import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { PrivacyPolicyComponent } from './components/privacyPolicy/privacyPolicy.component';
import { SignInDoctorComponent } from './components/sign-in-doctor/sign-in-doctor.component';
import { SignUpDoctorComponent } from './components/sign-up-doctor/sign-up-doctor.component';

const routes: Routes = [

  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component: HomeComponent},
  {path: 'ContactUs',component: ContactUsComponent },
  {path: 'PrivatePolicy',component: PrivacyPolicyComponent },
  {path: 'SignInDoctor', component:SignInDoctorComponent},
  {path:'SignUpDoctor', component: SignUpDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
