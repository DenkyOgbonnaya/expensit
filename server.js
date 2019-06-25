const express = require('express');
const cors = require('cors');
const db = require('./server/models/index')
const expenseRouter =  require('./server/routes/expenseRoute');
const path = require ('path');

const app = express();
const PORT = process.env.PORT || 8080; //listing port

app.use(express.json());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.static(__dirname + '/client/public'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api', expenseRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/public/build/index.html'));
})

  
    app.listen(PORT, (err) =>{
        if(err) throw err ;
            console.log(`Expensit listening on port ${PORT}`);
    } )
  
