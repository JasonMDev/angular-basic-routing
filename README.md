# angular-basic-routing

A basic AngularJS app using [Express 4](http://expressjs.com/).
This app demonstrates the use of routing to display various displays based on the URL. It is based upon the AngularJS lesson found at [codecademy](http://www.codecademy.com/).

The app is ready to deploy to [Heroku](http://www.heroku.com/). The Procfile, .env and server.js files have already been created, therefore only the following is required to get it deployed to [Heroku](http://www.heroku.com/):

Further details about the steps in deploying the app can be found at the following articles:
- [Deploying-nodejs on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) 

## A. Prerequisites
It is assumed that you have the following installed:
- [Node.js](http://nodejs.org/) and npm installed.
- an existing Node.js app.
- a free Heroku account.
- the Heroku CLI and [Heroku Toolbelt](https://toolbelt.heroku.com/).


## B. Get it Locally

Fork the repo and the make a clone of the forked repo in your local machine.

## C. Check production on local

First check if you aren't relying in system-level packages.
You shouldn't get errors.
```sh
$ cd angular-basic-array
$ rm -rf node_modules; npm install --production
$ heroku local web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

If there is an error due a module not been found, it should show what dependency is missing from your package.json file.

## C. Check development on local

```sh
$ cd angular-basic-array
$ npm install
$ heroku local web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

You can also try out the npm server
```sh
$ cd angular-basic-array
$ npm start
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

## D. Deploying to Heroku

Make sure that the root file contains a ".env" file required for heroku deployment.
This is usually an empty file.

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Deploying-nodejs on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) 
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
