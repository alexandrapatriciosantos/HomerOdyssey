const express = require('express');
const app = express();
const router = express.Router()
const connection = require('../../db/config');

router.get("/", (res)=>{
    res.send("youhou");
})

router.post('/signup', (req, res, callback) => {
    console.log("hey");
    const {email, password, name, lastname} = req.body;
    console.log(req.body);
    connection.query(
        `INSERT INTO users (email, password, name, lastname) 
        VALUES (?,?,?,?)`, 
        [email, password, name, lastname], 
        (err, results, fields) => {
            callback(err, results, fields);
          },
    ),
    console.log("hey hey")
    res.send('I am in POST signup');
});

module.exports = router
