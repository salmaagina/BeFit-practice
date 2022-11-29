//all classes are here currently, definitely not finished so take a look with a grain of salt :}
class LoginKey{
    username;
    password;
    userID;
    userAccess;

    constructor(username, password){
        this.username = username;
        this.password = password;
        this.userAccess = false;
    }

    //full login key no spaces between
    loginKey = ()=>{
        return this.username + this.password;
    };

    getUsername(){
        return this.username;
    }
    
    setUsername(username){
        this.username = username;
    }

    setPassword(password){
        this.password = password;
    }

    validateKey(){
        //check both usename and password
        if(this.validateUserName() && this.validatePassword())
            return true;
        return false;
    }

    //function to validate username based on schema: 
    /*
        username must be at least 8 characters long
        
    */ 
    validateUserName(){
        if(this.username.length >= 8)
            return true;
        return false;
    }


        //function to validate password based on schema: 
    /*
        password must be at least 8 characters long
        password must contatin special character
    */ 
    validatePassword(){
        //check special character here
        if(this.password >= 8)
            return true;

        return false;
    }

    toggleAccess() {
        if(this.userAccess == false)
            this.userAccess = true;
        else
            this.userAccess = false;
    }
    //
    //
    //
}

//test login key class

let loginKey = new LoginKey("josh","1234567890");
console.log(loginKey.validateUserName());


function login(username, password){
    //match login
    return;
}



class User{
    loginKey;
    id;
    firstName;
    lastName;
    fullName;
    height;
    weight;
    logs;
    
    constructor(firstName, lastName){
        //will let database create own id for users
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.height = 0;
        this.weight = 0;
        this.fullName = () =>{
            return  this.firstName + this.lastName;  
        }
        //new user has 0 logs
        this.logs = [];
        this.loginKey = null;
    }

    /*constructor(firstName, lastName, height, weight){
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setHeight(height);
        this.setWeight(weight);
        logs = [];
        this.loginKey = null;
    }*/

    getFirstName(){
        return this.firstName;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }
    
    getLastName(){
        return this.lastName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }

    getHeight(){
        return this.height;
    }

    setHeight(height){
        this.height = height;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight = weight;
    }

    getLogs(){
        return this.logs;
    }

    getLogsbyActivity(activity){
        result = [];
        for(var i = 0; i < this.logs.length; i++){
            if(this.logs.getActivity() == activity)
                result.push(this.logs.getActivity());
        }
    }

    addLog(log){
        if(!log.isValidLog())
            return;
        this.logs.push(log);  
    }
    //
    //
    //
}

class Log{
    date;
    statistic;
    activityName;
    report;

    constructor(statistic, activityName){
        //note down date of log to the current time
        const timeElapsed = Date.now(); 
        this.date = new Date(timeElapsed);
        this.statistic = statistic;
        this.activityName = activityName;
        //log report
        this.report = ()=>{
            return this.activityName + ": \n" + this.date.toUTCString() + "\n" + this.statistic;
        };
    }

    generateReport(){
        return console.log(this.report);
    }

     isValidLog(){
        if((this.date != null) && (this.statistic != null))
            return true;
        else
            return false;
    }

    getDate(){
        return this.date;
    }

    printDate(){
        return console.log(this.date.toLocaleString());
    }

    printTime(){
        return console.log(this.date.toTimeString());
    }


     getStatistic(){
        return this.statistic;
    }
}

//for now these requirements are static, we will generate new ones later on
class Activity{
    name;
    time;
    activityLevel;
    level1;
    level2;
    level3;

    Activity(name){
        this.setName(name);
    }

    getName(){
        return this.name;
    }

    getTime(){
        return this.time;
    }

    getActivityLevel(){
        return this.activityLevel;
    }

    //returns specfic list for given level
    getActivityLevelList(level){
        switch(level){
            case 1:
                this.level1;
            case 2:
                this.level2;
            case 3:
                this.level3;
            default:
                return this.level1;
        }
    }
}

class Requirement{
    name;
    description;
    done;

    constructor(name, description){
        this.setName(name);
        this.setDescription(description);
        this.done = false;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }

    toggleDone(){
        if(this.done == false)
            this.done = true;
        else
            this.done = false;
    }

    //we need schema for generating a requirement
}

class Goal{
    //list of requirements
    requirements;

    constructor(requirements){
        if(!(requirements.size() < 1 || null))
            this.requirements = requirements;
    }

    getRequirements(){
        if(!(requirements.size() < 1 || null)){
            return error;
        }
            return this.requirements;
    }

    getRequirementNames(){
        const requirementsNames = this.requirements;
        for(var i = 0; i < this.requirements.length; i++){
            requirementsNames.push(this.requirements.get(i).name);
        }
        return requirementsNames;
    }

    addRequirement(requirement){
        this.requirements.push(requirement);
    }

    //not tested
    deleteRequirement(requirement){
        for(var i = 0; i < this.requirements.length; i++){
            if(this.requirements.get(i) == requirement){
                this.requirements.splice(i, 1);
            }
        }
    }
    //
    //
    //
}

