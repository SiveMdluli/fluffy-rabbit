/* LET */

// var name = "Sive";
// console.log(name);
// name = "Stivie";
// console.log(name);


// function printName() {
//     var name = "Sive";//you can't access this var anywhere else. Locked within this block
//     console.log(name);
// }
// console.log(name);//Calling it here gives me an error.
// printName();

//The doesn't allow you to use the same variable name for two variables. Makes sure you don't have lots of bugs n errors when things get intense.

// var name = "Sive"

// if (name == "Sive") {
//     var fullName = "Sive Mdluli";//var are global variable that are only function scope(enclosed)

//     let fullName = "Sive Mdluli";//Let is the opposite! Scope oriantated. 
//     console.log(fullName);
// }


// /* let V/S Const */
// var name = "Sive";
// if (name == "Sive") {
//     let fullName = "Sive Mdluli";
//     const age = 18;
// }
// console.log(fullName);


/** the arrow function and all */
/*const ages =  [22, 14, 49, 6];

const adults = ages.filter(function(ages) {
    return ages > 20;
});

console.log(adults);*/

//WRITING THE SAME CODE IN ARROW FUNCTION
const ages =  [22, 14, 49, 6];

const adults = ages.filter((ages) => {
    return ages > 20;
});

console.log(adults)