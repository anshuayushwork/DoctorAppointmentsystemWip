import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login.component';
import { SignupComponent } from './app/signup.component';
import { PatientDashboardComponent } from './app/patient-dashboard.component';
import { DoctorDashboardComponent } from './app/doctor-dashboard.component';
import { AppointmentsComponent } from './app/appointments.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'patient', component: PatientDashboardComponent },
  { path: 'doctor', component: DoctorDashboardComponent },
  { path: 'appointments', component: AppointmentsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)],
}).catch(err => console.error(err));
