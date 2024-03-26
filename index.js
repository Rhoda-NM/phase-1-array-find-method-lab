// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
function superbowlWin(array) {
    let win = array.find((wins) => wins.result == 'W');
    if (win) {return win.year}

}
console.log(superbowlWin(record));