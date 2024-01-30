# Description
This project is an innovative integration of multiple cutting-edge technologies, tailored for efficient and robust desktop application development. At its core, it leverages Electron, a powerful framework that allows for the building of native desktop applications using web technologies, combining the performance of a desktop application with the ease of development found in web applications. For the frontend, React is employed, renowned for its efficiency and flexibility in building dynamic user interfaces with its component-based architecture. The backend is powered by Node.js, an asynchronous, event-driven JavaScript runtime designed to build scalable network applications, ensuring that the server-side of the application is fast, scalable, and easy to maintain. Data persistence and management are handled by SQLite, a lightweight yet highly reliable database, which offers a perfect balance between simplicity, performance, and functionality, making it ideal for desktop applications where a full-scale DBMS might be unnecessary. This amalgamation of technologies – Electron, React, Node.js, and SQLite – provides a robust platform for developing feature-rich, high-performance, and scalable desktop applications.

# How to Run the Project

This guide outlines the steps to run and build the project, including backend, frontend, and packaging for distribution.

## Running the Backend

To start the backend server, execute:

```bash
npm run start-backend
```

## Running the Frontend for Development

To run the React application in development mode, follow these steps:

```bash
cd app/frontend
npm run start
```

## Building the Project

To build the project, you need to build the React app first and then run the Electron app.

### Build React App

```bash
cd app/frontend
npm run build
```

### Run Electron App

In the root directory, you can start the Electron app with hot reload or a standard start:

- For hot reload:

  ```bash
  npm run dev
  ```

- For standard start (restart required after changes):

  ```bash
  npm start
  ```

## Packaging for Distribution

To create an executable file for distribution:

```bash
npm run dist
```

### Building for Windows

If you need to build for Windows, add the following script to your `package.json`:

```json
"scripts": {
  "dist:win": "electron-builder --win --x64",
  // ... other scripts
}
```

#### Using Wine

Electron-builder can use Wine to build Windows targets on non-Windows platforms. First, install Wine:

```bash
brew install --cask wine-stable
```

Then, run the build script for Windows:

```bash
npm run dist:win
```
