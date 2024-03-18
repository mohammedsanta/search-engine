const express = require('express');
const linkModel = require('./models/link');
const mongoose = require('mongoose');
const tagsModel = require('./models/tags');
const linkTagModel = require('./models/linkTag');
const searchRouter = require('./routes/search');
const postRouter = require('./routes/postRoutes');
const auth = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/search')
.then(() => {
    console.log('DB Conntected');
})
.catch((err) => {
    console.log(err)
})

app.use(express.json());

// 

app.get('/',(req,res) => {
    // res.render('index.html');
});

app.use('',searchRouter);
app.use('/auth',auth);

app.use('',postRouter)

app.listen('3000',() => {
    console.log('connection has been runed');
});