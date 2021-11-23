const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')


app.get('/',(req,res)=>{

    res.send('dsdsadas')

})


app.listen(5000)