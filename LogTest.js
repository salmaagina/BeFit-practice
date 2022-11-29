class User{
    firstName;
    lastName;
    fullName;
    logs;
    
    constructor(firstName, lastName){
        //will let database create own id for users
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = () =>{
            return  this.firstName + this.lastName;  
        }
        //new user has 0 logs
        this.logs = [];
    }

    getLogs(){
        return this.logs;
    }

    getLogsbyActivity(activity){
        return result = logs.filter((item)=>{
            return this.logs.getActivity() == activity;
        });
    }

    addLog(log){
        if(!log.isValidLog())
            return;
        this.logs.push(log);  
    }

    generateReportsforActivity(activity){
        const activityLogs = this.getLogsbyActivity(activity);
        activityLogs.forEach((item)=>{
            console.log(item.generateReport());
        });
    }

    addLogs(newLogs){
        const result = newLogs.forEach((item)=>{
            //push items on logs array of user
            if(item.isValidLog())
                this.logs.push(item);
        });
        this.logs = result;
    }
}

//File to demonstrate how the logs will work for our application
/*
    i.e.:

    {
        date: Date date,
        statistic: String value,
        activityName: String activityName
        report: String report,
    }
*/

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

const logs = [
        new Log("4000","Running"),
        new Log("1236","Walking"),
        new Log("2340","Running"),
        new Log("1.42","Distance"),
        new Log("1.69","Distance"),
];

const log1 = new Log("4000","Running");
const log2 = new Log('2000','Walking');
const log3 = new Log('7432','Running');
const log4 = new Log('2563','Running');
const log5 = new Log('9672','Distance');

//get running logs
const runningLogs = logs.filter((item)=>{
    return item.activityName == "Running";
});
/*
//get logs that are from distance
const distanceLogs = logs.filter((item)=>{
    return item.activityName == "Distance";
});

//get logs that correspond to walking
const walkingLogs = logs.filter((item)=>{
    return item.activityName == "Walking"
});

//console.log(runningLogs);
*/
//console.log("Distance Logs: " + distanceLogs);
let user1 = new User("Joshua","Cohen");
//console.log(log1);
//console.log(log1);
user1.addLog(log1);
user1.addLog(log2);
user1.addLog(log3);
user1.addLog(log4);
user1.addLog(log5);
//user1.addLogs(logs);
console.log(user1.logs);
console.log(runningLogs);