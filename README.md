# Employee Tracker

## Description
This Node.js application is used to create a database to keep track of all employees within a company. The user can see current employees, their department, and roles. New employees, departments, and roles can be added into the database.

## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
To install this application, the user's computer must also have Node.js and MySQL. When the files are downloaded from the repo, the user must install all npm packages by going to the terminal and typing "npm install" within the same directory as the repo files. To create the database, the user can copy and paste the "schema.sql" and "seeds.sql" files and run within MySQL. Run "node employee-tracker.js" to run the CLI application.

## Usage
The command line interface must be in the same directory as the "app.js" file and then the user can use the command "node app.js" to run the app. Make sure to change the password within "database.js" to your in order to use the database correctly.

[Video of App Usage](https://drive.google.com/file/d/1-2nDgXJOdgyOvbt6gIowvWnZNxkwp3r0/view)

## License
MIT License

Copyright (c) 2020 Raffay Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.