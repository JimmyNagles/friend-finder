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


   
















   friends.push(user)

   console.log("friends",friends)

  
   res.json(friends)




   

});

}