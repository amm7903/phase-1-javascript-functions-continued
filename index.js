// Your code here
function saturdayFun(activity = 'roller-skate!') {
    console.log(`This Saturday, I want to ${activity}`);
}
saturdayFun();
saturdayFun("bathe my dog");

// function mondayWork(work = 'go to the office'){
   // console.log(`This Monday, I will ${work}`);
// }
//mondayWork();
//mondayWork("work from home");

const fn = function mondayWork (work = "go to the office") {
    console.log(`This Monday, ${work}`); }
fn();
fn("work from home");

function wrapAdjective(special) {
    const word1 = "you are"
    return function () {
        const word2 = "where";
        return function (){
            console.log(`${word1} ${word2} ${special}`);
        };

    };
}
wrapAdjective(" you need to be dedicated programmer")()();