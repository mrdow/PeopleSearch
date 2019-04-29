# Required SDKs

## .NET Core

This project requires .NET Core 2.1 to build. The .NET Core 2.1 SDK can be installed from https://www.microsoft.com/net/download/dotnet-core/2.1.

## Node.js

This project requires the Node.js package manager for managing front-end dependencies. Node.js can be installed from https://www.npmjs.com/get-npm.

# Configuration Options

The following configuration options are located in config.json:

**LatencySimulation**
* *Enabled* - Determines whether the latency simulation filter is in effect for the search functionality.
* *MinDelayMS* - Controls the minimum amount of latency in milliseconds to simulate for the search functionality.
* *MaxDelayMS* - Controls the maximum amount of latency in milliseconds to simulate for the search functionality.

# Developing and Debugging

## Running the application

This project is setup to host the API and launch the web application in one step. Simply Run the application using F5 in Visual Studio.

## Developing the API

There are no special instructions for developing the API. You will need to rebuild and run after any C# code changes.

## Developing the UI

Running the application using Run (F5) in Visual Studio after making changes in the Angular code will not automatically rebuild the Angular project. This is because Visual Studio will not rebuild if it hasn't detected changes in the C# code. To iteratively develop the Angular portion of the application using the basic Run (F5) command in Visual Studio it is recommended to manually rebuild the project before running.

An easier approach to iteratively developing the Angular portion of the application is to first build and run the project using Visual Studio's Run (F5) command, then open a command prompt to the project root directory and run `ng build --aot --watch` to actively rebuild the Angular code on save. After making changes to and saving a file in the Angular portion of the application, you can simply reload the page in your browser to test your changes.
