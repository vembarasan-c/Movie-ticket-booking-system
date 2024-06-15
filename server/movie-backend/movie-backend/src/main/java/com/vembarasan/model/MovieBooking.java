package com.vembarasan.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "booking")
public class MovieBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String title;
    private int numberOfTickets;

    private String seatRowNumber;
    private String theatreName;
    @Temporal(TemporalType.DATE)
    private Date dateOfBooking;
    private String time;


    public MovieBooking() {
    }


    // Getters and setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(int numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public String getRowNumber() {
        return seatRowNumber;
    }

    public void setRowNumber(String rowNumber) {
        this.seatRowNumber = rowNumber;
    }

    public Date getDateOfBooking() {
        return dateOfBooking;
    }

    public void setDateOfBooking(Date dateOfBooking) {
        this.dateOfBooking = dateOfBooking;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSeatRowNumber() {
        return seatRowNumber;
    }

    public void setSeatRowNumber(String seatRowNumber) {
        this.seatRowNumber = seatRowNumber;
    }

    public String getTheatreName() {
        return theatreName;
    }

    public void setTheatreName(String theatreName) {
        this.theatreName = theatreName;
    }
}
