package com.example.docbook.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Appointment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long doctorId;
    private Long patientId;
    private String patientName;
    private LocalDate date;
    private String time; // HH:mm
    private String status; // PENDING/APPROVED/REJECTED

    // getters/setters
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}
    public Long getDoctorId(){return doctorId;}
    public void setDoctorId(Long doctorId){this.doctorId=doctorId;}
    public Long getPatientId(){return patientId;}
    public void setPatientId(Long patientId){this.patientId=patientId;}
    public String getPatientName(){return patientName;}
    public void setPatientName(String patientName){this.patientName=patientName;}
    public java.time.LocalDate getDate(){return date;}
    public void setDate(java.time.LocalDate date){this.date=date;}
    public String getTime(){return time;}
    public void setTime(String time){this.time=time;}
    public String getStatus(){return status;}
    public void setStatus(String status){this.status=status;}
}
