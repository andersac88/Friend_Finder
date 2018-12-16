let friendData = require("../data/friends");
let differenceArray = [];

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendData);
  });

  app.post("/api/friends", (req, res) => {
    let userArray = req.body.scores;
    let numberArray = userArray.map(a => +a);
    for (i = 0; i < friendData.length; i++) {
      let tempB = friendData[i].scores.map(a => +a);
      let temp = numberArray.map((value, index) => Math.abs(value - tempB[index]));
      let arrReduction = temp.reduce((sum, value) => sum + value, 0);
      differenceArray.push(arrReduction);
    }
    let picker = differenceArray.indexOf(Math.min(...differenceArray));
    res.json(friendData[picker]);
    friendData.push(req.body);
  });
};
