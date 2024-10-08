//Arrays in Javascript
// 1. Size, 2.Homogenous  in java arrays
//array of object
let playerInfo = [
    { name: "John", score: 26 },
    { name: "Jane", score: 30 },
    { name:"vivek", score:10 },
    { name:"Rahul", score:20 },
    { name:"Junaid", score:50 },
    { name:"Avantika", score:60 },
    { name:"Saani", score:17 }
];
//shallow copy
let employee = {
    eid:123,
    ename:"skdfuv",
    salary:100
}
let newemployee = employee;
newemployee.salary = 200;
employee.ename = "skduhckasgfvkagdfvae"
console.log(employee);
console.log(newemployee);






// playerInfo.sort(function(a,b){
//     return a.score - b.score;
// })
// console.log(playerInfo);

// sort :- lexicographically order sorting
// let arr = [1,2,100,12,34,86756,1000000];
// arr.sort(function(a,b){
//     return b-a;
// })
// console.log(arr);






// function getMaxSum(nums){
//    let maxSum = nums[0];
//    let partialSum = 0;
//    for(let i = 0; i < nums.length; i++){
//     partialSum = partialSum + nums[i];
//     maxSum = Math.max(maxSum, partialSum);

//     if(partialSum < 0){
//         partialSum = 0;
//     }
//    }
//    return maxSum;
// }

// console.log(getMaxSum([-1,2,3,-9]))

//some and every
// function checkEven(PlayerName){
//     console.log(PlayerName);
//     if(PlayerName.score%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }

// let ans = playerInfo.find(checkEven)
// console.log(ans);








//splice:- starting index, deletion count, what u want to add there?
// playerInfo.splice(1, 3, {name:"anand", score:89});
// console.log(playerInfo.reverse());



//slice():- give you an array
// let slicedArray = playerInfo.slice(20);
// console.log(slicedArray);






// Methods and Propoerties that are inbuild in JS for arrays
// 1. length
// console.log(playerInfo.length);


// method:- a normal function in class:- method
// property:- a variable in class:- property

// for(let i=0;i<playerInfo.length;i++){
//     console.log(playerInfo[i].score);
// }




// class Student{
//     constructor(){

//     }
//     // property
//     akhil = "Teacher";
//     // method
//     sum(){
//         console.log(1+2);
//     }
// }












// shift :- O(n)
// playerInfo.shift()
//insert elements at the beginning :- unshift():- O(n)
// playerInfo.unshift({ name: "Aakash", score: 45 },{ name: "Lokesh", score: 85})
// pop()
// playerInfo.pop()





//push function()
// playerInfo.push({ name: "Aakash", score: 45 },{ name: "Lokesh", score: 85})
// console.log(playerInfo);




// let arr = [1,true,"hjdvc", 823623];
// console.log(arr);