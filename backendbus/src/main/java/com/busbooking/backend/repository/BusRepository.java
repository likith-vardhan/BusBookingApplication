package com.busbooking.backend.repository;

import com.busbooking.backend.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusRepository extends JpaRepository<Bus, Long> {

    List<Bus> findBySourceAndDestination(String source, String destination);
}
