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
    require("dotenv").config();
    }

    if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
    }
