package com.example.docbook.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank private String name;
    @Email @NotBlank private String email;
    @NotBlank private String role; // PATIENT or DOCTOR
    @NotBlank private String password;
    private String phone;

    // getters and setters
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}
    public String getName(){return name;}
    public void setName(String name){this.name=name;}
    public String getEmail(){return email;}
    public void setEmail(String email){this.email=email;}
    public String getRole(){return role;}
    public void setRole(String role){this.role=role;}
    public String getPassword(){return password;}
    public void setPassword(String password){this.password=password;}
    public String getPhone(){return phone;}
    public void setPhone(String phone){this.phone=phone;}
}
