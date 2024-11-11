// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// localStorage.setItem("ect", JSON.stringify(obj));
// console.log(JSON.parse(localStorage.getItem("ect")));




let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
let arrString = JSON.stringify(arr);
console.log(arrString);

localStorage.setItem("LSArray", arrString);
console.log(JSON.parse(localStorage.getItem("LSArray")));








// let name = "Akhil Sharma";
// localStorage.setItem("word", name);
// localStorage.setItem("marks", 50);
// localStorage.setItem("subjects", "PCM");
// localStorage.setItem("age", 20);

// console.log(localStorage.getItem("subjects"));
// localStorage.removeItem("age");
// localStorage.clear();

