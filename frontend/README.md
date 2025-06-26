# Frontend - Your Car Your Way App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

It serves as the **frontend** for the Your Car Your Way App, providing the user interface and integrating with the backend WebSocket API.

---

## Prerequisites

- Node.js **18.13.x** or **20.x**
- npm **9.x** or **10.x**

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## WebSocket Integration

This frontend integrates with the backend Spring Boot WebSocket endpoint to enable **real-time chat** functionality.

- WebSocket URL: `ws://localhost:8080/sendMessage`
- Subscriptions: `/topic/messages`

Ensure the backend is running before testing the chat feature.

---

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

---

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

---

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

---

## Useful Links

- [Back to Main README](../README.md)
- [Go to Backend](../backend/README.md)
