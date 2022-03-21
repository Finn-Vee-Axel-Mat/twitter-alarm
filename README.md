<h3 align="center">
# Twitter Alarm 🐦
This topic deals with the development of an alert Website for twitter. In particular, it is requested that a user can register one (or more) words/tokens, which he wants to monitor. In case a certain threshold is being exceeded, an alert for the corresponding user should be generated. In addition, a visualization of should be presented on the Website.</h3>

## Overview

![Home route][home]
![Following route][following]
![Settings route][settings]

# Getting Started

## Prerequisites

* A backend supporting accounts and alarms. Currently functional with mongoDB [mongodb.com/fr-fr/cloud](https://www.mongodb.com/fr-fr/cloud).
* An EmailJS account for : Say welcome, reset password, email notifications  [emailjs.com](https://www.emailjs.com/).

## Installation
In the project directory, you need to run:

1. Install the dependencies to the local node_modules folder.
### `npm i`

2. Runs the app in the development mode.
### `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Major dependencies

* (External setup required) mongoDB: [mongodb.com/fr-fr/cloud](https://www.mongodb.com/fr-fr/cloud).
* (External setup required) EmailJS: [emailjs.com](https://www.emailjs.com/)
* (Auto install) CORS Anywhere a NodeJS proxy : [github.com/Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere/)
* (Auto install) Tailwind CSS : [tailwindcss.com](https://tailwindcss.com/)

[home]: https://github.com/Finn-Vee-Axel-Mat/twitter-alarm-assets/blob/master/screen_home.png
[settings]: https://github.com/Finn-Vee-Axel-Mat/twitter-alarm-assets/blob/master/screen_settings.png
[following]: https://github.com/Finn-Vee-Axel-Mat/twitter-alarm-assets/blob/master/screen_following.png
