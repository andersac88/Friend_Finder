let friendData = require("../data/friends");


module.exports = (app) => {
app.get("/api/friends", (req, res) => {
    res.json(friendData);
});

app.post("/api/friends", (req, res) => {
   let userArray = req.body.scores;
    let a = userArray.map(a => +a);
    let diffArray = [];
   for (i = 0; i < friendData.length; i++) {
     let tempB = friendData[i].scores.map(a => +a);
     console.log(tempB);
     let temp = a.map((value, index) => Math.abs(value - tempB[index]))
     console.log(temp);
    let reducedArr = temp.reduce((sum, value) => sum + value, 0);    
    console.log(reducedArr);
    diffArray.push(reducedArr);
   } console.log(diffArray);
   let picker = diffArray.indexOf(Math.min(...diffArray));
   console.log(picker);
   console.log(friendData[picker])
   res.json(friendData[picker]);
});
}