package com.vembarasan.controller;

import com.vembarasan.model.Movie;
import com.vembarasan.service.MovieServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;


import java.io.IOException;
import java.util.Date;
import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieServiceImpl movieService;


    @GetMapping("/all")
    public List<Movie> all(){
        return movieService.getall();
    }


    @PostMapping("/save")
    public ResponseEntity<Movie> save(
            @RequestParam("title")String title,
            @RequestParam("description") String description,
            @RequestParam("language") String language,
            @RequestParam("duration") String duration,
            @RequestParam("releaseDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date releaseDate,
            @RequestParam("genre") String genre,
            @RequestParam("file") MultipartFile file) {

        try {
            Movie media = movieService.saveMedia(title, description, language, duration, releaseDate, genre, file);
            return new ResponseEntity<>(media, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
