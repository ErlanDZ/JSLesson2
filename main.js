// 1) Задача

// let lines = 10;
// let str = ' ';
// for (let i = 0; i < lines; i++) {
//   str += '*';
//   console.log(str);
// }


// 2) Задача

// for (let j = 1; j <= 100; j++) {
//     if (j % 3 == 0 && j % 5 == 0 ){ 
//         console.log("FizzBuzz" ); 
//     }

//     else if(j % 3 == 0){
//         console.log("Fizz");
//     }

//     else if(j % 5 == 0){
//         console.log("Buzz");
//          }

      
//     else{
//             console.log(j);

//          }
    
// }

// 3) Задача
 
let size = 8; 
let board = "";

for (let i = 0; i < size; i++) {   
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0)
      board += " ";
    else
      board += "*";
  }
  board += "\n";
}

console.log(board);









