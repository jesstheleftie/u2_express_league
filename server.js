const express = require("express");
const app = express();
const PORT = process.env.PORT || 3006;



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to my page!");
  });

//Route for basketball
app.get("/basketball",(req,res)=>{
    res.send([
        {team: "Toronto Raptors", yearEstablished: 1995, stadium: "Scotiabank Arena", conference: "Eastern", division:"Atlantic"},
        {team: "Golden State Warrior", yearEstablished: 1946, Staidum: "Chase Center", conference: "Western", division:"Pacific"}
    ])
})

//Routes for basketball/warrior
app.get("/basketball/warrior", (req,res)=>{
    res.send([
        {player: "Stephen Curry", age: 36, height: "6'2", currentlyPlaying: true,conference: "Western", division:"Pacific"},
        {player: "Buddy Hield", age: 31, heihgt: "6.3", currrentlyPlaying: true, conference: "Western", division:"Pacific" }
    ])
})

//Routes for basketball/raptors
app.get("/basketball/raptors", (req,res)=>{
    res.send([
        {player: "Scottie Barnes", age: 23, height: "6'2", currentlyPlaying: true, conference: "Eastern", division:"Atlantic"},
        {player: "Devion Mitcheel", age: 26, heihgt: "6.1", currrentlyPlaying: true, conference: "Eastern", division:"Atlantic"}
    ])
})

//Route for baseball
app.get("/baseball",(req,res)=>{
    res.send([
        {team: "Toronto Blue Jays", yearEstablished: 1989, stadium: "Rogers Centre", conference:"American", division:"East"},
        {team: "New York Mets", yearEstablished: 1962, Staidum: "Citi Field", conference: "National", division:"East"}
    ])
})

//Route for Jays
app.get("/baseball/jays",(req,res)=>{
    res.send([
        {player: "Vladimir Guerrero Jr.", age: 25, height: "6'1", currentlyPlaying: true, conference:"American", division:"East"},
        {player: "Bo Bichette", age: 26, heihgt: "6.1", currrentlyPlaying: true, conference:"American", division:"East" }
    ])
})

//Route for Mets
app.get("/baseball/mets",(req,res)=>{
    res.send([
        {player: "Francisco Lindor", age: 25, height: "6'1", currentlyPlaying: true, conference: "National", division:"East"},
        {player: "Bo Bichette", age: 26, heihgt: "6.1", currrentlyPlaying: true, conference: "National", division:"East" }
    ])
})
//Route for hockey 
app.get("/hockey",(req,res)=>{
    res.send(
        {team: "Toronto Maple Leafs", yearEstablished: 1917, stadium: "Scotiabank Arena", conference: "Eastern", division:"Atlantic"},
        {team: "Vancouver Canucks", yearEstablished: 1970, Staidum: "Rogers Arena", conference: "Western", division: "Pacific" }
    )
})
//Route for leafs
app.get("/hockey/leafs",(req,res)=>{
    res.send([
        {player: "Mitchell Marner", age: 27, height: "6'1", currentlyPlaying: true, conference: "Eastern", division:"Atlantic"},
        {player: "Auston Matthews", age: 27, heihgt: "6.2", currrentlyPlaying: true, conference: "Eastern", division:"Atlantic" }
    ])
})

//Route for canucks
app.get("/hockey/canucks",(req,res)=>{
    res.send([
        {player: "Jake DeBrusk", age: 27, height: "6'1", currentlyPlaying: true, conference: "Western", division: "Pacific"},
        {player: "Quinn Hughes", age: 24, heihgt: "6'", currrentlyPlaying: true, conference: "Western", division: "Pacific"}
    ])
})

