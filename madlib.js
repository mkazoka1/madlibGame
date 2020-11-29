
let btn  = document.getElementById ("submitBtn");
let Noun = document.getElementById("Noun");
let presentTenseVerb = document.getElementById("presentTenseVerb");
let color = document.getElementById("color");
let landmark = document.querySelector("#landmark");
let message = document.querySelector ("#output");
     


btn.addEventListener('click', function(){
  message.textContent = "One chilly cold  halloween night i was walking by an old "  +  Noun.value  + "   " +  " when i suddenly heard sound of  " + presentTenseVerb.value +" " + " .When I turned to look I saw a tall man in a long " + color.value + " " +      " coat standing with a knife in his hand. I ran as fast as I could until i reached the " + landmark.value + " of the street. When i turned and looked back, the tall man in the long coat had disappeared into the night!!!! "
     
})


