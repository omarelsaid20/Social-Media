const express = require('express');
const path = require('path');
const mondgoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer();

const app = express();

const companyRoutes = require('./routes/company');
const userRoutes = require('./routes/user');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null,Math.random()*100 + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.json());
app.use(express.json());
// app.use(upload.array());

app.use(express.static('public'));
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/', companyRoutes);
app.use('/', userRoutes);


mondgoose
    .connect(
        'mongodb+srv://omar:omar.0123@cluster0-ib5pg.mongodb.net/SmartRecruiter?retryWrites=true&w=majority'
    )
    .then(result => {
        app.listen(8080);
    })