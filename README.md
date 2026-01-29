🚌 Bus Booking Application

Full Stack Project — React + Spring Boot

A complete full-stack bus booking system built using React (Frontend) and Spring Boot (Backend).
The application allows users to search buses, select seats visually, simulate payments, and view booking history with secure authentication.

✨ Features
👤 User Features

User registration and login

JWT authentication

Dashboard

Search buses by source and destination

Interactive seat selection (real bus layout)

Automatic fare calculation

Payment simulation

View booking history

🛠 Admin Features

Admin dashboard

Bus management

🧰 Technology Stack
Frontend

React

React Router DOM

Axios

Bootstrap

JavaScript

Backend

Java 17

Spring Boot

Spring Security

JWT Authentication

Spring Data JPA

MySQL

Maven

📦 Repository Structure
bus-booking-project/
 ├── bus-booking-frontend/
 └── backendbus/

============================================================
🎨 FRONTEND — React Application
============================================================
📁 Frontend Folder Structure
bus-booking-frontend/
 ├── node_modules/
 ├── public/
 │
 ├── src/
 │   ├── api/
 │   │   └── axios.js
 │   │
 │   ├── assets/
 │   │
 │   ├── components/
 │   │   ├── Navbar.jsx
 │   │   ├── ProtectedRoute.jsx
 │   │   └── ToastMessage.jsx
 │   │
 │   ├── pages/
 │   │   ├── AdminDashboard.jsx
 │   │   ├── Dashboard.jsx
 │   │   ├── Login.jsx
 │   │   ├── Register.jsx
 │   │   ├── SearchBus.jsx
 │   │   ├── SeatSelection.jsx
 │   │   ├── Payment.jsx
 │   │   └── MyBookings.jsx
 │   │
 │   ├── App.jsx
 │   ├── App.css
 │   ├── index.css
 │   ├── main.css
 │   └── main.jsx
 │
 ├── package.json
 └── README.md

⚙️ Frontend Setup
Install Dependencies
cd bus-booking-frontend
npm install

Run Application
npm run dev


Frontend runs at:

http://localhost:5173

🔐 Frontend Security

JWT token stored in localStorage

Axios interceptor attaches Authorization header automatically

Protected routes block unauthorized access

Navbar displays authenticated user actions

🔄 User Flow
Login → Dashboard → Search Bus → Seat Selection → Payment → My Bookings

============================================================
⚙ BACKEND — Spring Boot Application
============================================================
📁 Backend Folder Structure
backendbus/
 ├── controller/
 │   ├── BookingController.java
 │   ├── BusController.java
 │   └── UserController.java
 │
 ├── dto/
 │   ├── LoginRequest.java
 │   └── LoginResponse.java
 │
 ├── exception/
 │   └── GlobalExceptionHandler.java
 │
 ├── model/
 │   ├── Booking.java
 │   ├── Bus.java
 │   ├── Role.java
 │   └── User.java
 │
 ├── repository/
 │   ├── BookingRepository.java
 │   ├── BusRepository.java
 │   └── UserRepository.java
 │
 ├── request/
 │
 ├── security/
 │   ├── JwtAuthFilter.java
 │   ├── JwtUtil.java
 │   └── SecurityConfig.java
 │
 ├── service/
 │   ├── BookingService.java
 │   ├── BusService.java
 │   └── UserService.java
 │
 └── BackendbusApplication.java

⚙️ Backend Setup
Database Configuration

Create database:

CREATE DATABASE busbooking;


Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/busbooking
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

Run Backend
cd backendbus
mvn spring-boot:run


Backend runs at:

http://localhost:8080

🔐 Backend Security

JWT based authentication

Spring Security filter chain

Token validation middleware

Role-based access control

🌐 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/users/register	Register user
POST	/api/users/login	User login
GET	/api/buses/search	Search buses
POST	/api/bookings	Create booking
GET	/api/bookings/user/{id}	Fetch user bookings
🚀 Future Enhancements

Razorpay live payment integration

Seat locking mechanism

Ticket PDF generation

Email notifications

Admin analytics dashboard

Docker deployment

👨‍💻 Developer

Name: likith vardhan
Program: MCA (AI)
Skills: React | Spring Boot | Java | Python | AI
