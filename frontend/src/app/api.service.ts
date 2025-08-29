import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) {}
  // Auth
  login(email: string, password: string){ return this.http.post<any>(`${this.api}/auth/login`, {email,password}); }
  signup(user: any){ return this.http.post<any>(`${this.api}/auth/signup`, user); }
  // Doctors
  getDoctors(){ return this.http.get<any[]>(`${this.api}/doctors`); }
  createDoctor(d: any){ return this.http.post<any>(`${this.api}/doctors`, d); }
  // Appointments
  allAppointments(){ return this.http.get<any[]>(`${this.api}/appointments`); }
  book(appt: any){ return this.http.post<any>(`${this.api}/appointments/book`, appt); }
  byDoctor(id: number){ return this.http.get<any[]>(`${this.api}/appointments/doctor/${id}`); }
  byPatient(id: number){ return this.http.get<any[]>(`${this.api}/appointments/patient/${id}`); }
  setStatus(id: number, value: string){ return this.http.post<any>(`${this.api}/appointments/${id}/status?value=${value}`, {}); }
}
