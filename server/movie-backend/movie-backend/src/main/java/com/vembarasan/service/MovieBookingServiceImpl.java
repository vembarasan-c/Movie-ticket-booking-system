package com.vembarasan.service;

import com.vembarasan.model.MovieBooking;
import com.vembarasan.repository.MovieBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieBookingServiceImpl implements MovieBookingService{

    @Autowired
    private MovieBookingRepository movieBookingRepository;

    @Override
    public List<MovieBooking> getAllBookings() {
        return movieBookingRepository.findAll();
    }

    @Override
    public MovieBooking saveBooking(MovieBooking booking) {
        return movieBookingRepository.save(booking);
    }
}
