package com.vembarasan.service;


import com.vembarasan.model.MovieBooking;
import java.util.List;

public interface MovieBookingService {

    public List<MovieBooking> getAllBookings();
    public MovieBooking saveBooking(MovieBooking booking);

}
