// async function fetchData() {
//     let data = await fetch("http://www.omdbapi.com/?apikey=c8d793ca&s=The Conjuring");
//     let result = await data.json();
//     console.log(result);
// }

// fetchData();


let timeout; // Timeout variable for debounce

    document.getElementById('movie-search').addEventListener('input', (e) => {
      clearTimeout(timeout); // Clear the previous timeout
      const query = e.target.value.trim();
      if (query.length < 3) return; // Only search if 3+ characters

      timeout = setTimeout(async () => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=c8d793ca&s=${query}`);
        const data = await res.json();

        console.log(data);
        
        document.getElementById('movie-results').innerHTML =
          data.Search?.map(movie => `<div>${movie.Title} (${movie.Year})</div>`).join('') || 'No results found';
      }, 1000); // 1000ms debounce delay
    });





// function myThrottle(func, delay) {
//     return function(){
//         document.getElementById("my-btn").disabled = true;
//         setTimeout(()=>{
//             func()
//         }, delay)
//     }
// }



// let newFun = myThrottle(()=>{
//     document.getElementById("my-btn").disabled = false;
//     console.log('btn is free now ');
// }, 3000)



// let counter = 0;
// function count(){
//     console.log(counter++); 
// }

// function myDebounce(func, delay){
//     let timer;
//     return function(){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func();
//         }, delay)
//     }
// }


// let betterFunction = myDebounce(count,1000)