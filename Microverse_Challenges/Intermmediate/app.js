/*
_Each season, she mantains a record of her play,
//might need to declare it ouside the funtion.
*/


function breakingRecords(scores) {
    // let recordsToHigh = 0;//set in reference to scores indexes, not just zero. but index zero - the starting point. 
    let highRecord = scores[0];
    // let lowRecord = 0;
    let lowRecord = scores[0]; 


    highRecBreakCount = 0;
    lowRecBreakCount = 0;
    let values = [];


    for(let i = 0; i < scores.lenght; i++) {

        if(scores[i] > scores[i + 1]) {

            if ( lowRecord > scores[i +1]) {
                lowRecord = scores[i + 1];
                lowRecBreakCount ++;

                console.log({
                    highRecord, 
                    highRecBreakCount
                });
            }  
        }

        if(scores[i] < scores[i + 1]) {
            //Just checked if Highest record had been brocken
            if(highRecord < scores[i + 1]) {
                //this means we the must have a NEW value of score.
                highRecord = scores[i +1];
                highRecBreakCount ++;

                console.log({
                    highRecord, 
                    highRecBreakCount
                });
            }
        }
    }

    values.push(highRecBreakCount);
    values.push(lowRecBreakCount);

    return values;
}
breakingRecords(3, 4, 21, 36, 10, 28, 35, 5, 24, 42);


// console.log(highRecord, lowRecord);



/**Undefine, Undefined */
// function breakingRecords(scores) {
//     let recordsToHigh = 0;
//     let recordsToLow = 0;

//     for(let i = 0; i < scores.length; i++) {

//         if(scores[i] > scores[0]) {
//             recordsToHigh.push(scores[i]);
//         }
//         if(scores[i] < scores[0]) {
//             recordsToLow.push(scores[i]);
//         }
//     }

//     console.log(recordsToHigh.length, recordsToLow.length);

//     return recordsToHigh;

// }

// let result = breakingRecords(3, 4, 21, 36, 10, 28, 35, 5, 24, 42);
// console.log(result);









function breakingRecords(scores) {
    // Write your code here
    let lowRecord = scores[0];
    let highRecord = scores[0];
    
    let lowRecBreakCount = 0;
    let highRecBreakCount = 0;
    let values = [];

    for(let i = 0; i > scores.lenght; i++) {

        if(scores[i] > scores[i + 1]) {
            //Lowest record break
            if (lowRecord > scores[i +1]) {
                lowRecord = scores[i + 1];
                lowRecBreakCount ++;

                console.log({
                    lowRecord, 
                    lowRecBreakCount
                });
            }  
        }

        if(scores[i] < scores[i + 1]) {
            //Just checked if Highest record had been brocken
            if(highRecord < scores[i + 1]) {
                //this means we the must have a NEW value of score.
                highRecord = scores[i +1];
                highRecBreakCount ++;

                console.log({
                    highRecord, 
                    highRecBreakCount
                });
            }
        }
    }

    values.push(highRecBreakCount);
    values.push(lowRecBreakCount);
    return values;
}

breakingRecords(3, 4, 21, 36, 10, 28, 35, 5, 24, 42);


function timeConversion(s) {
    // Write your code here
    //Perform two tests: AM && PM.


    for(let i = 0; i < s.length; i++){

        if(s.includes('PM')){
            
        }
        for(let k = 0; k < s.length; k++){

        }
    }

}