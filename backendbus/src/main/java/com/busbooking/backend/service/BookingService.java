package com.busbooking.backend.service;

import com.busbooking.backend.model.Booking;
import com.busbooking.backend.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // Create booking
    public Booking createBooking(Booking booking) {
        booking.setBookingTime(LocalDateTime.now());
        return bookingRepository.save(booking);
    }

    // Get user bookings
    public List<Booking> getUserBookings(Long userId) {
        return bookingRepository.findByUserId(userId);
    }
}
