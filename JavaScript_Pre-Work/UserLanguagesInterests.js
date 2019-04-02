// User languages and interests
// Objectives:
// Familiarity with moving through JavaScript objects to find relevant data.
// Essential practice for when we need to sift through data we get from an API.
// Notice that in the code snippet below, we have an array of users.
// Each user is an object. Each user has the key languages, which is associated with an array of strings. 
// Each user also has the key interests, which is associated with an object. 
//There are varying keys within this interests object, and each of those keys is associated with an array of strings.


let users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

// Write a function called userLanguages that accepts an array of users, such as the one shown above.
//Return a string that lists all the users by first name and last name and the languages that each user knows. 
// Make the string as nicely formatted as possible so that it is easy to read.
// Example: userLanguages(users) returns

//Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. 
//Winnie the Pooh knows Python, Swift, and Java. 
//Arthur Dent knows JavaScript, HTML, and Go.



function userLanguages(users) {
  for(let i = 0; i < users.length; i++){
    let username = users[i].fname + " " + users[i].lname;
    let languageArray = users[i].languages;
    let interestsObject = users[i].interests;
    var interestsString = "";

    for(let key in interestsObject) {
     interestsString += interestsObject[key]+", ";
    }

    console.log(username + " knows: " + languageArray);
    console.log(username + " likes: " + interestsString.trim());
  }
  return;
}

userLanguages(users);
