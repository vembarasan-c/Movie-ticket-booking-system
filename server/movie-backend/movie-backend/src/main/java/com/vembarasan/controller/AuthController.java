package com.vembarasan.controller;

import com.vembarasan.model.AuthenticationResponse;
import com.vembarasan.model.User;
import com.vembarasan.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User req) {

        return ResponseEntity.ok(authenticationService.register(req));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User req) {
        return ResponseEntity.ok(authenticationService.authenticate(req));
    }



    @GetMapping("/demo")
    public ResponseEntity<String>  demo(){
        return ResponseEntity.ok("user only access");
    }

    @GetMapping("/adminonly")
    public ResponseEntity<String>  adminonly(){
        return ResponseEntity.ok("Admin only access");
    }


}