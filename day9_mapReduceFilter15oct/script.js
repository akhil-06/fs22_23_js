let str = "Akhil Sharma Developer";
console.log(
 str.split(" ").map((word)=>word[0]).join(""));



// let input = [12,-90,45,34,-190];

// let input = [12,46,32,64,76];
// input.sort((a,b)=> a-b);
// let median;
// if(input.length % 2 === 0){
//     median = (input[input.length/2 - 1] + input[input.length/2])/2;
// }else{
//     median = input[Math.floor(input.length/2)];
// }
// console.log(median);


// // let input = [12,46,32,64,72];

// let mean = input.reduce((acc,cV)=>{
//     return acc + cV;
// },0);
// console.log(mean/input.length);


// input.sort((a,b)=> a-b);

// input.reduce((accumulator, currentValue, index, array)=>{
//     accumulator.mean += currentValue / array.length
// })




// let arr = [1,2,3,4,5];
// let ans = arr.reduce((ak, h)=>{
//     return ak+h
// }, 0)
// console.log(ans);

// let filteredArray = arr.filter((ele)=>{
//     return ele>4;
// })

// console.log(filteredArray);


// let mapArray = arr.map((ele)=>{
//     return ele * 2;
// })
// console.log(mapArray);

// console.log(arr);


// let arr = [
//     { id: 100, name: 'John' },
//     { id: 200, name: 'Jane' },
//     { id: 300, name: 'Bob' },
//     { id: 400, name: 'Alice' },
//     { id: 500, name: 'Mike' }
// ]

// let array = arr.filter((ele)=>{
//     return ele.id > 200 && ele.id < 500;
// }).forEach((ele)=>{
//     console.log(ele.name);
// })
// console.log(array);

// arr.forEach(function(obj){
//     console.log(obj);
//     console.log(obj.name);
    
// })

// function code of mean and median
