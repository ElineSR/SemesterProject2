
//https://github.com/ElineSR/SemesterProject2/blob/master/Boardgame/script/characters10.json
  

// fetch('https://api.myjson.com/bins/9dhnw')
//   .then((response) => {
//     return response.json()
//   })
//   .then(jsonResult => {
//     console.log(jsonResult);
//   })



fetch('https://api.myjson.com/bins/cm06y')
  .then(result => result.json())
  .then((res) => {
    createCards(res);
    
  })
  .catch(err => console.log(err))

function createCards(result) {
 const avatars = result.avatars;

for (let i = 0; i < avatars.length; i++) {
  document.getElementById("avatarSection").innerHTML += "<div class = 'avatarSection_avatarCard'> <Img class = 'avatarSection_avatarImage' src=" + " " + avatars[i].image + "></Img><h2 class>" + avatars[i].Name + "</h2><h3>" + avatars[i].Titles + "</h3></div>";
 
}

}