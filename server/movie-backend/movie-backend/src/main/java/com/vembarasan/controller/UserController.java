package com.vembarasan.controller;

import com.vembarasan.model.User;
import com.vembarasan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
public class UserController {

    @GetMapping("/demo")
    public ResponseEntity<String> demo(){
        return ResponseEntity.ok("user only access");
    }


//    @GetMapping("/demo")
//    public String demo(){
//        return "Demo controller";
//    }

}
