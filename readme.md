# Reduxstagram

A simple React + Redux implementation. Spin Off from a Wes Bos project (https://learnredux.com/), with the following upgrades:

- Adding better componentisation (Containers/Components pattern)
- Removing hard coupling between components
- Increasing delegation (each component responsible for its own data)
- Mocking up Server side behaviour using Redux Saga

Screenshot when asynchronous behaviour is happening:
![ScreenShot](/README/processing.png?raw=true)

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
