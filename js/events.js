//define functions here

function getIt() {
  $('p').on('click', function(e) {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(key) {
<<<<<<< HEAD
    if (key.which === 71) {
=======
    if (key.which == 83) {
>>>>>>> 813392f6884ef90947e8b79e3a16020692081593
      alert("Not the \"G\"!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

  // call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
  
});
