## SEBR 0916

# Express League

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWoXjyWIuDPtTOw4Z4gH7B1cBrIWhjG_hfQ&s)

## Set Up
  - Run your set up and installations to create an Express file with Nodemon installed, and a Server.js file to run it in.

## Requirements
  - An Express server with 9 seperate routes, 3 of which will be of different sports, which will contain information on teams, with each team then containing (at least) 2 teams within.
  - Each parent route containing the Sport will have a JSON object about the teams
  - Each Team route nested inside of their respective sport will have information on at least 3 players (You can make up this data, it does not need to be 100% real)
  - Your parent Routes can look like

    - localhost:3001/baseball
    - localhost:3001/hockey
    - localhost:3001/football


    With the data looking like (but not exactly like this)

    
    ```js
    //baseball
    [
      { team: "New York Yankees", 
        yearEstablished: 1903 ,
        stadium: "Yankee Stadium" },
      { team: "New York Mets", 
        yearEstablished: 1962 ,
        stadium: "Citi Field" }
    ]
    ```

    And your nested routes within containing:

    ```js
    //baseball/yankees

    [ 
      { player: "Aaron Judge",
        age: 28 ,
        height: "6'1" ,
        battingAverage: 267,
        currentlyPlaying: true
        },
       { player: "Babe Ruth",
        age: 134 ,
        height: "5'11",
        battingAverage: 304,
        currentlyPlaying: false
        }
      ]
    ```

## Bonus 
  Add an additional block of Route and put in what division or conference the teams are in as well! National, American, East West North or South...
    
