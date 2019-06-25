const express = require('express');
const cors = require('cors');
const db = require('./server/models/index')
const expenseRouter =  require('./server/routes/expenseRoute');

const app = express();
const PORT = process.env.PORT || 8080; //listing port

app.use(express.json());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.static(__dirname + '/client/public'));

app.use('/api', expenseRouter)

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Expensit.',
  }));

  
    app.listen(PORT, (err) =>{
        if(err) throw err ;
            console.log(`Expensit listening on port ${PORT}`);
    } )
  
