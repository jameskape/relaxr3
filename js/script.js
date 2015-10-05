//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){

$(".extra").hide();



function moreStory() {
  $(".extra").slideToggle(500);
}

$(".right").on("click", moreStory);

//When i click on read more show more

});
