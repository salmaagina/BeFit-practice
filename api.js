//NODE MODULE TO HOST SERVER
const Joi = require('joi');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());


/*Testing purposes only*/
const users = [
    {name: "Joshua", height: 62, weight: 140},
    {name: "Ali", height: 0, weight: 0},
    {name: "Salma", height: 0, weight: 0},
    {name: "Helawi", height: 0, weight: 0},
    {name: "George", height: 0, weight: 0},
];


//GET METHOD
app.get('/api/website', (req, res) =>{
        fs.readFile("AppPages/lab1edited.html",  (error, pgResp) =>{
        if (error) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgResp);
        }
    });
        res.end();
});

app.get('/api/users',(req,res) =>{
    res.send(users);
    getAllCourses();
});


//once login is verified, client will send this request

app.get('/api/users/:id', (req,res) =>{
    const user = users.find(c => 
        c.id === parseInt(req.params.id));

    if(!user){ // 404 status code
        res.status(404).send('The course with the given ID was not found');
        return;
    }
    res.send(user);
});


app.get('/api/users/id/?log=activity', (req,res)=>{
    //return the list of logs given specified activity
    res.send(logs);
});

app.get('/api/posts/:year/:month', (req,res) =>{
    res.send(req.params);
    //can also use string queries
    //res.send(req.query);
});





//function to validate a new user
function validateUser(user){
    const schema = Joi.object(
        {
            name: Joi.string().min(3).required()
        }
    );
    return schema.validate(user);
}




//POST METHOD
app.post('/api/users', (req,res)=>{
    
    const result = validateCourse(req.body);

    console.log(`Elements: ${users.length}`);
    if(result.error){
        //return error to client
        //code 400: bad request
        res.status(400).send(result.error.details[0].message);
        res.write('Could not add user field');
        return;
    }
    
    const course = {
        id: users.length + 1,
        name: req.body.name,
    };

    users.push(user);
    res.send(user);
});

app.post('/api/users/logs', (req, res)=>{
    //validate log (activityName)
    //i.e. if its steps
        //integer
    //if not valid
        res.status(400).send(result.error.details[0].message);
        res.write('Could not add new log');

        //INSERT LOG into user.logs
    
});



//PUT METHOD
app.put('/api/users/:id', (req,res) =>{
    //look up the user
    const user = users.find(c => c.id === parseInt(req.params.id));
    //if not existing, return 404
    if(!user){
        res.status(404).send('The course with the given ID was not found');
        return;
    }
    //validate 
    //if invalid, return 400 - bad request
    const result = validateCourse(req.body);

    if(result.error){
        //say to the client that name is required
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update user
    user.name = req.body.name;
    //return the updated user to the client
    res.send(user);
    getAllUsers();
});


app.delete('/api/users/:id', (req,res) =>{
    //look up the user
    const user = users.find(c => c.id === parseInt(req.params.id));
    //if not existing, return 404
    if(!user){
        res.status(404).send('The course with the given ID was not found');
        return;
    }
    //Delete
        //find index of user
    const index = users.indexOf(course);
    users.splice(index, 1);
    //Return the same user (Just a standard convention)
    res.send(users);
});






//function to validate a new user
function validateUser(user){
    const schema = Joi.object(
        {
            name: Joi.string().min(3).required()
        }
    );
    return schema.validate(user);
}

// PORT (Environment Variable)
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening on port ${port}...`);    
});


//auxillary functions


//get all data for user objects
function getAllUsers(){
    for(var i = 0; i < users.length; i++){
        console.log(users[i].id, users[i].name);
    }
}


function validateSchema(activityName){
    if(activityName == 'walking'){
        //log must be rounded to whole number
    }
    else if(activityName == 'running'){
        //log must be double i.e. 1.62 mi
    }
}