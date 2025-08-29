package com.example.docbook.service;
import org.springframework.stereotype.Service;
import com.example.docbook.repository.DoctorRepository;
import com.example.docbook.model.Doctor;
import java.util.List;

@Service
public class DoctorService {
    private final DoctorRepository repo;
    public DoctorService(DoctorRepository repo){this.repo=repo;}
    public List<Doctor> all(){ return repo.findAll(); }
    public Doctor create(Doctor d){ return repo.save(d); }
}