const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('maicol:<password>@cluster0-betge.mongodb.net/test?retryWrites=true&w=majority',{
    userCreateIndex: true,
    usedNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));