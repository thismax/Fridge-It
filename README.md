![fridge-it 2017-11-08 09-43-44](https://user-images.githubusercontent.com/6326036/32583639-77ef939e-c4a9-11e7-9f56-3131f7862827.png)
![fridge-it 2017-11-08 09-44-14](https://user-images.githubusercontent.com/6326036/32583641-7a3c3f30-c4a9-11e7-94f1-6dc348ce4638.png)


# Fridge-It

### Overview
Fridge-It is a web-app that allows users to keep track of the items in their fridge and intuitively responds with recipe ideas. Multiple users can interact with one fridge and can post bulletin board messages for all of the viewers of the fridge to see. 

### Tech Stack
* nodejs 
* express
* postgresql
* sequelize
* unirest
* react
* redux 
* firebase
* css
* semantic ui

External api: Spoonacular

If you are not already familiar with Redux, here are the videos we used. Be sure to finish the series in order to get all of the information available: https://www.youtube.com/watch?v=1w-oQ-i1XB8

### Start Up
In order to get this app running, begin with 'npm install'. Then run 'npm start' in order to start nodemon and 'npm run compile' to run webpack. You can view the app in the browser using localhost:3000.

### RESTful API
You can find the request routes at server > routes > index.js

### Spoonacular
Follow steps on https://spoonacular.com/ in order to get an api key

### Environmental Variables
You will need 2 variables in your .env:
* DB_URL: to link to your postgress database (elephantsql)
* API_FOOD_KEY: to hold your Spoonacular api key

You will need 4 variables in your firebase.json:
* FIREBASE_API_KEY: to hold your firebase api key
* FIREBASE_AUTH_DOMAIN: link to your auth domain
* FIREBASE_DB_URL: link to your fb database
* FIREBASE_STORAGE_BUCKET: link to your storage bucket

### Developers
The developers of this app:
* Tiffany Phan (project owner)
* Angie Tang (developer)
* Daniel Chong (scrum master)
* Aaron Liss (developer)
