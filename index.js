const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
const win = record.find(superbowlWin).year

function superbowlWin(record){
    if (record.result === "W"){
        return record.year
    }
    //   return record.result === "W";
}
console.log(win)