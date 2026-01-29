package com.busbooking.backend.controller;

import com.busbooking.backend.dto.LoginRequest;
import com.busbooking.backend.dto.LoginResponse;
import com.busbooking.backend.model.User;
import com.busbooking.backend.security.JwtUtil;
import com.busbooking.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    public UserController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    // ✅ Register API
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userService.registerUser(user);
        return "User registered successfully";
    }

    // ✅ Login API with JWT
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        User user = userService.login(
                request.getEmail(),
                request.getPassword()
        );

        String token = jwtUtil.generateToken(
                user.getEmail(),
                user.getRole().name()
        );


        return new LoginResponse(token, user);
    }
}
