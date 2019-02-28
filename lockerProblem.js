
// New School Lockers

// Date: 01/28/2001 at 13:35:55
// From: Michael Lopez
// Subject: New School Lockers

// A new school is being opened. The school has exactly 1000 lockers and 
// 1000 students. On the first day of school, the students meet outside 
// the building and agree on the following plan: the first student will 
// enter the school and will open all of the lockers. The second student 
// will enter and close every locker with an even number. The third 
// student will then "reverse" every third locker; that is, if the locker 
// is closed, he will open it; if it is open, he will close it. The 
// fourth student will then "reverse" every fourth locker, and so on 
// until all 1000 students in turn have entered the building and 
// "reversed" the proper lockers. Which lockers will finally remain open?

// 1. For a particular locker, how many times was it touched?
// 2. How many lockers, and which ones, were touched exactly twice?
// 3. Which locker was touched the most?

// A picture must be drawn of a table and or graph.

// By doing a search of your Web site, we were able to find the answer to 
// the problem:

//   Opening and Closing 1000 Lockers
//   http://mathforum.org/dr.math/problems/atsang.3.16.97.html   

// I was curious to know what level of math this type of question is - is 
// it middle school, high school, or college?

// The one question that remained unanswered was which locker was touched 
// the most. If you or your team has time to return that answer, that 
// would be greatly appreciated.  

// Thank you for your time.






class Locker {
    constructor(number, state, touched) {
        this.number = number;
        this.state = state;
        this.timesTouched= touched;



    }

    // interactions

    
}

function touchedMost(numStudents){
    let lockers = lockerProblem(numStudents);
    let touchedMost = lockers[0];
    lockers.forEach(locker =>{
        if (locker.timesTouched > touchedMost.timesTouched){
            touchedMost = locker;
        }
    })
    console.log("Touched Most: \n", touchedMost);
}
function touchedTwice(numStudents){
    let lockers = lockerProblem(numStudents);
    console.log("All Lockers: \n", lockers)
    let touchedTwiceArr = [];
    lockers.forEach(locker =>{
        if (locker.timesTouched === 2){
            touchedTwiceArr.push(locker);
        };
    });
    console.log("Touched Twice: \n", touchedTwiceArr)
}

function openLockers(numStudents){
    let lockers = lockerProblem(numStudents);
    console.log("All Lockers: \n", lockers)
    let openLockersArr =[];
    lockers.forEach(locker => {
        if (locker.state === true){
            openLockersArr.push(locker);
        };
    });
    console.log("Open Lockers: \n", openLockersArr)
}

// loop through students
function lockerProblem(numStudents) {
    let lockers = lockersArr(numStudents);
    for (student = 1; student <= numStudents; student++) {
        // for each student loop through lockers
        lockerLoop(lockers, student)
    };
    return lockers
};


function lockerLoop(lockers, student){
    lockers.forEach(locker => {
        let lockerNum = locker.number;
        // console.log(lockerNum);
        if (lockerNum % student === 0) {
            locker.state = !locker.state;
            locker.timesTouched += 1;
        };
    });
    return lockers
}

function lockersArr(numStudents) {
    // populate lockers
    let lockers = [];
    for (i = 1; lockers.length < numStudents; i++) {
        locker = new Locker(i, false, 0)
        lockers.push(locker);
    }
    return lockers
}




touchedMost(1000);




