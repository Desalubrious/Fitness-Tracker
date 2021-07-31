const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
// Create an express app
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect mongoose db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',{
    newUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Set up routes
require('./routes/htmlroutes')(app);
require('./routes/apiroutes')(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}
);
