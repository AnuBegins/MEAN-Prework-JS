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