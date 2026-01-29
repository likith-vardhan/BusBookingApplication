package com.busbooking.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String busNumber;
    private String busName;

    private String source;
    private String destination;

    private int totalSeats;
    private double price;
}
