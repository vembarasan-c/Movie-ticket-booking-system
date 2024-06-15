package com.vembarasan.repository;

import com.vembarasan.model.MovieBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieBookingRepository extends JpaRepository<MovieBooking, Long > {
}
