# Backend - Your Car Your Way App

This module contains the **Spring Boot** application (Java 21) that powers the backend of the Your Car Your Way App.

It provides APIs and WebSocket support for real-time chat functionality with the frontend.

---

## Prerequisites

- Java 21
- Maven 3.6+

---

## Running the Application

1. Import the `backend` folder into IntelliJ IDEA.
2. Ensure the project is configured to use JDK 21 (Project Structure > SDKs).
3. From the command line, run:

```bash
mvn clean install
mvn spring-boot:run
```

The application will start at `http://localhost:8080`.

---

## WebSocket Integration

This backend uses Spring WebSocket to enable **real-time chat** functionality with the frontend.

- WebSocket endpoint: `/sendMessage`
- Subscription topic: `/topic/messages`

---

## API Endpoints

Planned REST endpoints will support user management, reservations, and other features needed by the frontend.

---

## Additional Resources

- [Back to Main README](../README.md)
- [Go to Frontend](../frontend/README.md)
