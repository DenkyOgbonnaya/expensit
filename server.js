const express = require('express');
const cors = require('cors');
const db = require('./server/controllers/dbConnect')

const app = express();
const PORT = process.env.PORT || 8080; //listing port

app.use(express.json());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(ProductsRouter);

app.use('/api', ProductsRouter);

// makes a connection to the db
db.connect( err => {
    if(err) throw err;
    console.log('connected to shopturing db')
})

app.listen(PORT, err => {
    if(err) console.log(err);
    console.log(`Shopturing is running on port ${PORT}`)
})