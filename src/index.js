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
let context = "in basic HTML provide a workout were each workout takes a line in the document  inside the  <strong></strong> element and in the end sign up something motivational for the user. ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayExercise);


}

let exerciseForm = document.querySelector("#exercise-generator");
exerciseForm.addEventListener("submit", generateExercise);