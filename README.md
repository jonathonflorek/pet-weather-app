# Pet Weather App

https://github.com/jonathonflorek/pet-weather-app

The Pet Weather App of the Pet Weather Programming Take Home Challenge.

Based on the [TypeScript + Express + ejs + Node.js Starter with bulma.io](https://github.com/minwook-shin/typescript-express-ejs-node-starter)

Integrations:

- [Pet Shelter API](https://github.com/jonathonflorek/pet-shelter-api)
- [Dark Sky](https://darksky.net/dev)
- [Google Geocoding](https://developers.google.com/maps/documentation/geocoding/start)

Running on heroku [here](https://afternoon-oasis-06485.herokuapp.com/).

## How To Develop

When running locally, the server is launched with environment variables provided in the `/.env` file. A sample is provided in `/examples`.

Key NPM scripts:
- `npm start`: starts the built app without any fuss (or environment variables)
- `npm run start:dev`: builds and starts with environment variables from `/.env`
- `npm run build`: builds the project

## Deploying Locally

- clone the repository
- ensure `/.env` exists and defines the environment variables described in `/examples/.env`
- run `npm install`
- run `npm run start:dev` to build and run

## Deploying to Heroku

```
heroku create
git push heroku master
heroku config:set PETSHELTERAPI_URL=<your-pet-shelter-api-url>
heroku config:set DARKSKY_URL=https://api.darksky.net/forekast/<your-darksky-key>
heroku config:set GOOGLE_GEOCODING_KEY=<your-google-geocoding-key>
```

This project expects certain environment variables to be provided in a `.env` file. Alternatively, run `node dist/server.js` directly with the environment variables specified in the environment. An example `.env` file is provided in `examples/.env`.
