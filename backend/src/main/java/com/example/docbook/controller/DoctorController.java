package com.example.docbook.controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.docbook.model.Doctor;
import com.example.docbook.service.DoctorService;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {
    private final DoctorService service;
    public DoctorController(DoctorService service){ this.service=service; }

    @GetMapping public List<Doctor> all(){ return service.all(); }
    @PostMapping public Doctor create(@RequestBody Doctor d){ return service.create(d); }
}
