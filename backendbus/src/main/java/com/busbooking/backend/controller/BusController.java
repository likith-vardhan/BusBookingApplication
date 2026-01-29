package com.busbooking.backend.controller;

import com.busbooking.backend.model.Bus;
import com.busbooking.backend.service.BusService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buses")
@CrossOrigin
public class BusController {

    private final BusService busService;

    public BusController(BusService busService) {
        this.busService = busService;
    }

    // ✅ ADMIN ONLY - Add bus
    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Bus addBus(@RequestBody Bus bus) {
        return busService.addBus(bus);
    }

    // ✅ ADMIN ONLY - Get all buses
    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Bus> getAllBuses() {
        return busService.getAllBuses();
    }

    // ✅ USER + ADMIN - Search bus
    @GetMapping("/search")
    public List<Bus> searchBus(
            @RequestParam String source,
            @RequestParam String destination
    ) {
        return busService.searchBus(source, destination);
    }
}
