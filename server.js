const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080; //listing port

app.use(express.json());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of fullness.',
  }));

app.listen(PORT, (err) =>{
    if(err) throw err ;
        console.log(`HiBooks listening on port ${PORT}`);
} )