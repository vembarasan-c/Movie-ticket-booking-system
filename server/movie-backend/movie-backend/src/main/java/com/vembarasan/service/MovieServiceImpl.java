package com.vembarasan.service;

import com.vembarasan.model.Movie;
import com.vembarasan.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
public class MovieServiceImpl {
    @Autowired
    private MovieRepository movieRepository;


    public List<Movie> getall(){
       return movieRepository.findAll();
    }

    public Movie saveMedia(String title, String description, String language, String duration,
                           Date releaseDate, String genre, MultipartFile file) throws IOException {
        Movie media = new Movie();
        media.setTitle(title);
        media.setDescription(description);
        media.setLanguage(language);
        media.setDuration(duration);
        media.setReleaseDate(releaseDate);
        media.setGenre(genre);
        media.setImageName(file.getOriginalFilename());
        media.setData(file.getBytes());
        return movieRepository.save(media);
    }

    public Movie save (Movie movie){
        return movieRepository.save(movie);
    }

}
