package com.busbooking.backend.service;

import com.busbooking.backend.model.Bus;
import com.busbooking.backend.repository.BusRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusService {

    private final BusRepository busRepository;

    public BusService(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    // ✅ Admin adds bus
    public Bus addBus(Bus bus) {
        return busRepository.save(bus);
    }

    // ✅ Admin fetches all buses
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    // ✅ User searches buses
    public List<Bus> searchBus(String source, String destination) {
        return busRepository.findBySourceAndDestination(source, destination);
    }
}
