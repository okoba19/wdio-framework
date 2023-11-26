# Test Automation Framework (TAF) for E2E testing of web service

This project is a Test Automation Framework (TAF) built using WebDriverIO, Mocha, Chai, and Allure for end-to-end testing.

## Features

- Utilizes WebDriverIO for browser automation.
- Uses Mocha as the testing framework.
- Employs Chai for assertions.
- Integrates Allure for test reporting.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from (https://nodejs.org/).

### Clone the Repository
git clone <https://github.com/okoba19/wdio-framework>

### Install Dependencies
npm install

### Test Executing
To run test suit please use command:
npm run wdio

### Report
After executing the tests, Allure reports are automatically generated
You may need to install Allure Commandline -> https://github.com/allure-framework/allure-npm
To view report run command
allure-open

### Folder Structure
The project follows a structured folder hierarchy to organize test scripts, page objects, configuration files, and other artifacts. The folder structure includes:

test/: Contains test scripts.
pages/: Includes page objects to model the application under test.
wdio.conf.js: Holds configuration files
