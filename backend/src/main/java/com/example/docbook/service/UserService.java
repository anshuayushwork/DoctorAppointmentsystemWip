package com.example.docbook.service;
import org.springframework.stereotype.Service;
import com.example.docbook.repository.UserRepository;
import com.example.docbook.model.User;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo){this.repo=repo;}
    public User signup(User u){ return repo.save(u); }
    public Optional<User> login(String email, String password){
        return repo.findByEmail(email).filter(u -> u.getPassword().equals(password));
    }
}