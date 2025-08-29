package com.example.docbook.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.docbook.model.Doctor;
public interface DoctorRepository extends JpaRepository<Doctor, Long>{}