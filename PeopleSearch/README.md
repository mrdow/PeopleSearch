# Setup Instructions

## 1. Install Required SDKs

### 1.1 .NET Core

This project requires .NET Core 2.1 to build. The .NET Core 2.1 SDK can be installed from https://www.microsoft.com/net/download/dotnet-core/2.1.

### 1.2 Node.js

This project requires the Node.js package manager for managing front-end dependencies. Node.js can be installed from https://www.npmjs.com/get-npm.

## 2. Installing Dependencies

The Environment Setup Solution Folder contains a [SetupEnvironment.cmd](./SetupEnvironment.cmd) file to install the necessary dependencies and configure the environment to run the application. This command MUST be run before starting the project.

## 3. Running the application

This project is setup to host the API and launch the web application at debug time. Simply Run the application using F5 in Visual Studio. The Pre-Build step will build the Angular app automatically.

# Configuration Options

The following configuration options are located in config.json:

**LatencySimulation**
* *Enabled* - Determines whether the latency simulation filter is in effect for the search functionality.
* *MinDelayMS* - Controls the minimum amount of latency in milliseconds to simulate for the search functionality.
* *MaxDelayMS* - Controls the maximum amount of latency in milliseconds to simulate for the search functionality.

# Developing and Debugging

## Developing the API

There are no special instructions for developing the API. You will need to rebuild and run after any C# code changes.

## Developing the UI

Running the application using Run (F5) in Visual Studio after making changes in the Angular code will not automatically rebuild the Angular project. This is because Visual Studio will not rebuild if it hasn't detected changes in the C# code. To iteratively develop the Angular portion of the application using the basic Run (F5) command in Visual Studio it is recommended to manually rebuild the project before running.

An easier approach to iteratively developing the Angular portion of the application is to first build and run the project using Visual Studio's Run (F5) command, then open a command prompt to the project root directory and run `ng build --aot --watch` to actively rebuild the Angular code on save. After making changes to and saving a file in the Angular portion of the application, you can simply reload the page in your browser to test your changes.

# Running Unit Tests

## Running the API Tests

The API tests can be run with the Visual Studio Test Explorer once the project has been built.

## Running the UI Tests

The UI tests must be run from the command line. Open a prompt to the project root and run any of the following commands.
* `ng test` - Builds the Angular app in watch mode and runs the Karma test runner to view the test results in a new browser window.
* `ng test --no-watch` - Builds the Angular app once and runs the Karma test runner to view the test results in a new browser window.
* `ng test --code-coverage` Builds the Angular app in watch mode and runs the Karma test runner to view the test results in a new browser window. Creates a new /coverage folder at the root of the project. Open the index.html file to see a report of the project's code coverage.
* `ng test --no-watch --code-coverage` Builds the Angular app once and runs the Karma test runner to view the test results in a new browser window. Creates a new /coverage folder at the root of the project. Open the index.html file to see a report of the project's code coverage.
