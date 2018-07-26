Swing Dance Seattle
===================

This is the codebase for [swingdanceseattle.com](https://swingdanceseattle.com),
a listing of swing-era classes, dances, and events in the region.

Development
-----------

Clone this repo and run
```
npm install
```
to install all dependencies.

### Firebase

This app uses [firebase](https://firebase.google.com) for the backend and so
you need to set up a personal firebase instance for development.

#### Credentials

First, visit [firebase.google.com](https://firebase.google.com) to set up an
account and create a project. Once you're in your project's dashboard, click on
the `Add Firebase to your web app` icon on the project overview page to get the
credentials for your project.

Once you have your credentials, you will need to go into the
`firebase.config.js.example` and the `.firebaserc.example` files to input your
credentials and project name. These files assume a qa and a production project.
For the sake of development, you will only need to fill out the qa sections.
Don't forget to remove the `.example` extensions on these files.

#### Set Up Authentication

If you are working on the admin section of the app, you will need to set up
authentication. If not, you can skip this section. In your project's firebase
dashboard, click on the `Authentication` tab on the left sidebar and set up
email authentication. Then, create a user for yourself so you can log in to the
app.

#### Seeding the database

You will now need to log into firebase from your terminal. In the app's
directory, run
```
./node_modules/.bin/firebase login
```
and follow the prompts.

To seed your firebase database, simply run
```
npm run seed:qa
```

### Running the App

To start the app, run
```
npm start
```
and navigate to `localhost:5000`. This will begin three processes: a webpack
process to build and watch the client-side code, a babel process to watch and
transpile the server-side code, and a firebase development server that runs
the firebase functions.

It is also possible to deploy your app to firebase, though this will rarely be
necessary. However, if a bug or feature requires you to test on firebase's
servers, you can run
```
npm run deploy:qa
```
Firebase will host your static javascript assets and your firebase functions.
You will be able to see your app at `<your project name>.firebaseapp.com`.

Contributing
------------

You can take a look at the issues tab for any outstanding features or bugs. If
you find a bug or would like to discuss a new feature, create an issue to discuss
it. Thanks and happy coding!
