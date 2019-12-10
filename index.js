const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes');

app.use(express.json());
app.use('/api/v1', router);

mongoose.connect('/mongodb://localhost/bog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(data => {
    app.listen(8800, () => console.log('run in port 8800'))
})
.catch(err => {
    console.log('failed connect to database')
})













// function luasPersegi(panjang, lebar) {
//     return (panjang*lebar)
// }
// var  yog = luasPersegi(7,8)
// console.log("luaspersegi", yog )