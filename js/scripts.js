var myName = prompt("What is your name?");
var color = prompt("What is your favorite color? Choose between red, blue, green, yellow, orange, pink, purple, black, white, or grey.");
switch (color) {
  case 'purple':
  alert(myName+" enjoys the color "+color);
  var barn = confirm("Does "+myName+" also enjoy Barney the purple dinosaur?");
  if(barn == true) {
    alert("I suggest keeping that a secret.");
  } else {
    alert(myName+" must be pretty cool!");
  };
  break;
  case 'red':
  alert(myName+" enjoys the color "+color);
  var apples = confirm("Does "+myName+" also enjoy red delicious apples?");
  if(apples == true) {
    alert("An apple a day keeps the doctor away!");
  } else {
    alert("I'd suggest trying some apples.");
  };
  break;
  case 'yellow':
  alert(myName+" enjoys the color "+color);
  var snow = confirm(myName+" can I give you some advice?");
  if(snow == true) {
    alert("Never eat yellow snow!");
  } else {
    alert("A little advice never hurts.");
  };
  break;
  case 'blue':
  alert(myName+" enjoys the color "+color);
  var sky = confirm(myName+", do you see a blue sky outside today?");
  if(sky == true) {
    alert("The weather must be great! Get off the computer!");
  } else {
    alert("I'd suggest staying inside today.");
  };
  break;
  case 'green':
  alert(myName+" enjoys the color "+color);
  var money = confirm("If you like green, do you also like money?");
  if(money == true) {
    alert("Don't be too greedy!");
  } else {
    alert("You must be insane");
  };
  break;
  case 'black':
  alert(myName+" enjoys the color "+color);
  var night = confirm("Does "+myName+" also enjoy night skies full of stars?");
  if(night == true) {
    alert("You don't see many stars in Fresno.");
  } else {
    alert("Try looking up sometime!");
  };
  break;
  case 'white':
  alert(myName+" enjoys the color "+color);
  var shark = confirm("Does "+myName+" also enjoy great white sharks?");
  if(shark == true) {
    alert("Shark week is in July every year!");
  } else {
    alert("You must be scared of the ocean.");
  };
  break;
  case 'grey':
  alert(myName+" enjoys the color "+color);
  alert("I have nothing for grey, it's a boring color.");
  break;
  case 'orange':
  alert(myName+" enjoys the color "+color);
  var juice = confirm("Does "+myName+" also enjoy orange juice?");
  if(juice == true) {
    alert("Orange juice goes great with breakfast!");
  } else {
    alert("I'd suggest trying some oj.");
  };
  break;
  case 'pink':
  alert(myName+" enjoys the color "+color);
  var girl = confirm("Is "+myName+" a girl?");
  if(girl == true) {
    alert("You must be a pretty girl!");
  } else {
    alert("Oops, my bad!");
  };
  break;
  default:
  alert("I'm sorry, "+myName+", that was not a given color. Please try again.");
  break;
};
