let friendData = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendData);
  });

  app.post("/api/friends", (req, res) => {
    let userArray = req.body.scores;
    let a = userArray.map(a => +a);
    let diffArray = [];
    for (i = 0; i < friendData.length; i++) {
      let tempB = friendData[i].scores.map(a => +a);
      let temp = a.map((value, index) => Math.abs(value - tempB[index]));
      let reducedArr = temp.reduce((sum, value) => sum + value, 0);
      diffArray.push(reducedArr);
    }
    let picker = diffArray.indexOf(Math.min(...diffArray));
    res.json(friendData[picker]);
  });
};
