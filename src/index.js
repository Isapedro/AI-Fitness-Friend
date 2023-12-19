function displayExercise(response){

  new Typewriter("#exercise", {
  strings: response.data.answer,
  autoStart: true,
  delay:50,
  cursor:"",
});

}



function generateExercise(event){
  event.preventDefault();

  let userInstructions= document.querySelector("#user-instructions");
let apiKey = "3o10257bf2td10cc46640fa6c8aad2c3";

let prompt = `User instructions : provide 10 minutes workout of this designated area ${userInstructions.value} only say 5 exercises and the amount of reps and sets`;
let context = "In basic HTML with no intro please provide a workout for the designated area of the user instructions with <h1> followed with an <ul> list of exercises, no explanations needed";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let exerciseDisplay = document.querySelector("#exercise");
exerciseDisplay.classList.remove("hidden");
exerciseDisplay.innerHTML = `<div class ="blink">Genarating a workout focusing ${userInstructions.value} <i class="fa-solid fa-robot fa-bounce"></i></div>`;

axios.get(apiUrl).then(displayExercise);


}

let exerciseForm = document.querySelector("#exercise-generator");
exerciseForm.addEventListener("submit", generateExercise);