package com.example.docbook.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.docbook.model.Appointment;
import java.util.List;
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
    List<Appointment> findByDoctorId(Long doctorId);
    List<Appointment> findByPatientId(Long patientId);
}