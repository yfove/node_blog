#guide

_setup_

npm init -y

_download all necessary packages_

npm i express ejs express-ejs-layouts

_install development dependencies_

npm i --save-dev nodemon

_install database_

install mongoDb on your local device
npm i mongoose

_load environment variables_

npm i --save-dev dotenv

_check if we are running in production environment_

    if (process.env.NODE_ENV !== "production") {
    require("dotenv").parse();
    }

    ^^^ this will not work

    if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
    }

    ^^^ this will work

_configure heroku_
create a databse for mongo db on mongo db atlas.

- free aws cluster
- keep everything default

_Creating New Routes_
create authors.js

// All authors route create

```
router.get('/', (req, res) => {
    res.render('authors/index')
})

```

// New authors route create

```router.get('/new', (req. res) => {
    res.render(authors/new)
})
```

// Create Author

```
router.post('/', (req, res) => {
    res.send('Create')
})
```

_Now we can create the views for the routes_

- create an authors folder
- create new file called index.ejs
- create new file called new.ejs

Each one of our routes should be in their own folder. Routes or controllers will have a single file. Views will have a single folder for the files associated with the controller.
