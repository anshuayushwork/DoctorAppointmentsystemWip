package com.example.docbook.service;
import org.springframework.stereotype.Service;
import com.example.docbook.repository.AppointmentRepository;
import com.example.docbook.model.Appointment;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    private final AppointmentRepository repo;
    public AppointmentService(AppointmentRepository repo){this.repo=repo;}
    public Appointment book(Appointment a){ if(a.getStatus()==null) a.setStatus("PENDING"); return repo.save(a); }
    public List<Appointment> byDoctor(Long id){ return repo.findByDoctorId(id); }
    public List<Appointment> byPatient(Long id){ return repo.findByPatientId(id); }
    public Optional<Appointment> updateStatus(Long id, String status){ 
        return repo.findById(id).map(a->{ a.setStatus(status); return repo.save(a); });
    }
    public List<Appointment> all(){ return repo.findAll(); }
}