const friends = require('../data/friends.js');

//ROUTING
// Two Routes with express parameters
module.exports = function(app) {
   // A GET json route to display all possible friends
  app.get('/api/friends', function (req, res) {
     res.json(friends);
  });


  app.post('/api/friends', function (req, res) {

   const user=req.body

   console.log("user",user)

   var totalDifference = 0;

   var bestMatch = {
     name: "",
     photo: "",
     friendDifference: 1000
   };
   
   var b = user.answers.map(function(item) {
      return parseInt(item, 10);
    });
   console.log(b)
 
    var sum = b.reduce((a, b) => a + b, 0);

   console.log("Sum of users score " + sum);
   console.log("Best match friend diff " + bestMatch.friendDifference);
     console.log("+++++++=================++++++++++");

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      console.log(friends[i].answers);
      var c = friends[i].answers.map(function(item) {
         return parseInt(item, 10);
       });

       var total = c.reduce((a, c) => a + c, 0);

  console.log('total', total)
    

    }
   
    console.log(bestMatch);

   



   friends.push(user)
   console.log('userAdded')
   console.log("friends",friends)

  
   res.json(friends)




   

});

}