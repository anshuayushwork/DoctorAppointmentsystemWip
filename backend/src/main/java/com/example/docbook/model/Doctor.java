package com.example.docbook.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Doctor {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank private String name;
    @NotBlank private String specialization;

    // getters/setters
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}
    public String getName(){return name;}
    public void setName(String name){this.name=name;}
    public String getSpecialization(){return specialization;}
    public void setSpecialization(String specialization){this.specialization=specialization;}
}
