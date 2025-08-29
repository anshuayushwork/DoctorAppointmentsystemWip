package com.example.docbook.controller;
import org.springframework.web.bind.annotation.*;
import com.example.docbook.model.User;
import com.example.docbook.service.UserService;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService service;
    public AuthController(UserService service){ this.service = service; }

    @PostMapping("/signup")
    public User signup(@RequestBody User u){ return service.signup(u); }

    @PostMapping("/login")
    public Optional<User> login(@RequestBody Map<String,String> body){
        return service.login(body.get("email"), body.get("password"));
    }
}
