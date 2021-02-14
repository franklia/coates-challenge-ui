# How To Run On Local

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- NPM
- React.js
- Node version 14.15.4 or higher
- Google Chrome or Firefox

## Installation

Clone the repo and install dependencies:

- Clone the repo git clone https://github.com/franklia/coates-challenge-ui.git
- Navigate into the repo: cd coates-challenge-ui
- Run npm install to install the node modules

## Set up your environment variables:

- Create a .env.local file in the root directory using the template below

REACT_APP_API_URI=http://localhost:3001/api

Launch app:

- Run npm start to start your local server, view the app on http://localhost:3000

## Set up API:

Set up api by following the README file here: https://github.com/franklia/coates-challenge

# General Notes

- I bootstrapped the app using `create-react-app`
- Regarding CSS, I decided to use the Material UI Hook API which generates styles using css in js. This method isolates the styles within the component, and avoids global clashes. I know Sass was mentioned in the brief, however the `create-react-app` documentation doesn't give a strong recommendation for Sass. I also kept the index.css, which has some CSS resets from `create-react-app`, and also allowed me to enter styles for the weather icons which otherwise would have been difficult to create since they are injected in from prop data.
- Unfortunately I did not get time to write any tests, but I know they are important.
