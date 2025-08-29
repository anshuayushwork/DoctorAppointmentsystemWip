package com.example.docbook.controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import com.example.docbook.model.Appointment;
import com.example.docbook.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    private final AppointmentService service;
    public AppointmentController(AppointmentService service){ this.service=service; }

    @GetMapping public List<Appointment> all(){ return service.all(); }

    @PostMapping("/book")
    public Appointment book(@RequestBody Appointment a){ return service.book(a); }

    @GetMapping("/doctor/{id}")
    public List<Appointment> byDoctor(@PathVariable Long id){ return service.byDoctor(id); }

    @GetMapping("/patient/{id}")
    public List<Appointment> byPatient(@PathVariable Long id){ return service.byPatient(id); }

    @PostMapping("/{id}/status")
    public Optional<Appointment> status(@PathVariable Long id, @RequestParam String value){ return service.updateStatus(id, value); }
}
