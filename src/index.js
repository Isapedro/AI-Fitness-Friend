
function generateExercise(event){
  event.preventDefault();



new Typewriter("#exercise", {
  strings: "Generating your 15 minutes workout...",
  autoStart: true,
  delay:50,
  cursor:"",
});

}

let exerciseForm = document.querySelector("#exercise-generator");
exerciseForm.addEventListener("submit", generateExercise);