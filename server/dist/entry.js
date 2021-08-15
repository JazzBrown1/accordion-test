'use strict';

var express = require('express');
var cors = require('cors');
var path = require('path');
var dotenv = require('dotenv');
var sequelize$1 = require('sequelize');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var cors__default = /*#__PURE__*/_interopDefaultLegacy(cors);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var dotenv__default = /*#__PURE__*/_interopDefaultLegacy(dotenv);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

dotenv__default['default'].config();
const sequelize = new sequelize$1.Sequelize(process.env.DB_NAME || 'database', process.env.DB_USER || 'user', process.env.DB_PASSWORD || 'password', {
    // sqlite! now!
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || ':memory:',
});

class User extends sequelize$1.Model {
}
User.init({
    firstname: sequelize$1.DataTypes.STRING,
    surname: sequelize$1.DataTypes.STRING,
    email: sequelize$1.DataTypes.STRING,
    dob: sequelize$1.DataTypes.DATE,
    gender: sequelize$1.DataTypes.STRING,
    comments: sequelize$1.DataTypes.STRING,
    telephone: sequelize$1.DataTypes.STRING,
}, { sequelize, modelName: 'user' });

const normChars = /^[a-z ,.'-]+$/i;
const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const number = /^[0-9]*$/;
const validate = {
    firstname: (firstname) => (normChars.test(firstname)
        && firstname.length > 1
        && firstname.length <= 30),
    surname: (surname) => (normChars.test(surname)
        && surname.length > 1
        && surname.length <= 30),
    email: (emailAd) => (email.test(emailAd)
        && emailAd.length > 5
        && emailAd.length <= 80),
    dob: (dob) => (dob instanceof Date),
    gender: (gender) => gender === 'M' || gender === 'F',
    telephone: (phonenumber) => (number.test(phonenumber)
        && phonenumber.length > 1
        && phonenumber.length <= 30),
    comments: (comments) => comments.length <= 300,
};

const validateAll = (data) => {
    if (!validate.firstname(data.firstname)
        || !validate.surname(data.surname)
        || !validate.email(data.email)
        || !validate.dob(new Date(data.dob))
        || !validate.gender(data.gender)
        || !validate.telephone(data.telephone)
        || !validate.comments(data.comments))
        return false;
    return true;
};
const saveDetails = (req, res, error) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        body.dob = new Date(body.dob); // parse the date
        // Validate payload and send a 400 if request is bad
        if (!validateAll(body)) {
            res.sendStatus(400);
            return;
        }
        yield sequelize.sync();
        const user = yield User.create(body);
        const json = user.toJSON();
        // Success send 200
        res.status(200).json(json);
    }
    catch (err) {
        error(err || new Error('Unknown Exception Thrown'));
    }
});

const routes = express.Router();
// Parse the JSON body for API requests
routes.use(express.json());
routes.post('/saveDetails/', saveDetails);

dotenv__default['default'].config();
try {
    if (!process.env.APP_PATH)
        throw new Error('Env var APP_PATH is required');
    if (!process.env.PORT)
        throw new Error('Env var PORT is required');
    const { APP_PATH, PORT } = process.env;
    const app = express__default['default']();
    // Apply full CORS policy
    app.use(cors__default['default']());
    // Serve API routes
    app.use('/api/', routes);
    // Server React App - In full prod Id prefer to do this using nginx s3/elb
    app.use(express__default['default'].static(path__default['default'].join(__dirname, APP_PATH)));
    // Send 404
    app.use((r, res) => {
        res.sendStatus(404);
    });
    // Start App
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
catch (err) {
    console.error(err);
    process.exit(1);
}
