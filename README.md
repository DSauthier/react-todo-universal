# React Universal App with Social Login Starter Kit

Minimum react-redux boilerplate (MERN) for desktop, mobile, and web app with social login feature.

Inspired by creating universal apps like Slack, Skype, etc.

## Demo
[Web app](https://react-universal-web.herokuapp.com/)

[Expo (mobile)](https://expo.io/appetize-simulator?url=https://expo.io/@by12380/react-universal)

\* Instructions:  
Click 'Tap to play' -> Open with Chrome -> Click 'Always' -> Scroll down the web page and Click 'Open project using Expo'.

Electron app (download links):  
[Mac](https://www.dropbox.com/s/2vnwx9dttz083or/react-universal-0.2.7.dmg?raw=1)
[Windows](https://www.dropbox.com/s/o97syfutahencpg/react-universal%20Setup%200.2.7.exe?raw=1)
[Linux](https://www.dropbox.com/s/zrd413nhrmhibqg/react-universal-0.2.7-x86_64.AppImage?raw=1)

<br />
<img src="https://uc9cd02455a523f842a36adfac56.dl.dropboxusercontent.com/cd/0/inline/AQSlfnZ4m1ci1ivIflconhTVjvxCHz1QUQ3-cYqTXA8dr2kJkXKtP4gRbA8Ta1G4ZlusgIFEaeZjUzkjygxknOmKGbjBKD-w1NZeQ8CIITcdWp2NAXp8XhQKNfjZNSlmgAIJ7mgWE4A76VQnEF0Y1J96wOrAm35TSlESZ8EWaMrukP8_q88U15iOEGqqLbQ1HVE/file" width="1000px"/>
<br />

#### [Todo app demo](https://react-todo-universal.herokuapp.com/)  

## Features
- React (Universal)
- Redux (Universal)
- Electron (Desktop)
- Expo (Mobile)
- Express (App Server) (optional)
- Mongo DB (Database) (optional)
- Automatic re-login (session storage)

## Social Login
- [Auth0](https://auth0.com/) (Default setup) - to demonstrate multiple social login platforms (Google, Facebook, Github, Twitter, etc...)

## Getting started
```
git clone https://github.com/by12380/react-universal.git
cd react-universal
```
## General Setup
- [Auth0](#auth0-setup-for-development)
- [Web app](./Client/React/)
- [Electron app](./Client/Electron/)
- [Expo app](./Client/Expo/)
- [App server](./Server) (optional)

## Auth0 Setup (for development)
1. Sign in / Register Auth0 account
2. Go to 'Application' -> [Your App Name] -> 'Settings'
3.  In 'Allowed Callback URLs', add

    `http://localhost:3000/callback` (for Web and Electron app)

    `https://auth.expo.io/@[Your Expo Account Username]/react-universal` (for Expo app)

    In 'Allowed Logout URLs', add

    `http://localhost:3000/`

4.  Go to 'APIs' -> 'Create API'
5.  Set 'Identifier' (ex. https://api.react-universal.com) -> Hit 'Create'
6.  Go to 'Settings' -> Toggle 'Allow Offline Access' -> 'Save'
