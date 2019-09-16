var veryHungry = false;
var chance = 0

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Steamed Hams"; // title

  document.getElementById('author').innerHTML="Harry Flannery & Trevor McMullen"; // author

  
   
  // All of your code goes under here
  

  var story = "*ding dong* Well Seymour, I made it, despite your directions. Ah, Superintendent Chalmers, welcome. I hope you're prepared for an unforgettable luncheon! " + many(); // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  chance = random(0,6)
  if(chance > 5 ){
  return " Seymour! Superintendent, I was just, streching my calves on the windowsill while waiting for the clams to finish. Asymmetric exercise, care to join me? No. Superintendent, I hope you're ready for mouth watering clams. I thought we were having steamed clams. Yes! *chewing* You know these clams are quite good. Yes, patented Skinner clams, old family recipe. For steamed clams? Yes! I should be going now. Of course. Well Seymour, you are an odd fellow, but I must say, you steam a good clam."
  }else{
  if(chance > 4){
  return "*gasp* Oh egads! My roast is ruined! It's going to cause a fire I better put it out. Seymour! Superintendent, I was just, putting out the fire from my ruined roast, care to join me? Yes. I better go get my mother outside in case this gets out of hand. I'm going to call 911. While the trucks come want to go behind my house to the Krusty Burger and get some steamed hams. Steamed hams? Thats what I call hamburgers. You call hamburgers, steamed hams? Yes it's a, regoinal dialect. Uh huh, what region? Upstate New York. Really? Well I'm from Utica an I've never heard anyone use the phrase ''steamed hams.'' Oh, not in Utica, no, it's an Albany expression. I see. *chewing* You know these hamburgers are quite similar to the ones they have at McDonalds. Oh ho ho ho, no, patented Krusty burgers, old recipe. Yeah, so we call them hamburgers despite the fact they are beef. Excuse me for one second. AAH, well that was wonderful, good thime was had by all, I'm pooped. Yes I should be going now. Of course. Well Seymour, you are a good fellow, but I must say, you steam an odd clam."  
  }  
  return "*gasp* Oh egads! My roast is ruined! But what if, I were to purchase fast food and disguise it as my own cooking. Ho ho ho ho ho, delightfully devilish, Seymour. Seymour! Superintendent, I was just, streching my calves on the windowsill. Asymmetric exercise, care to join me? Why is there smoke coming out of your oven, Seymour? Oh, that isn't smoke, it's steam! Steam from the steamed clams we're having. Mmm, Steamed clams. Whew. Superintendent, I hope you're ready for mouth watering hamburgers. I thought we were having steamed clams. Oh,no, I said steamed hams, Thats what I call hamburgers. You call hamburgers, steamed hams? Yes it's a, regoinal dialect. Uh huh, what region? Upstate New York. Really? Well I'm from Utica an I've never heard anyone use the phrase ''steamed hams.'' Oh, not in Utica, no, it's an Albany expression. I see. *chewing* You know these hamburgers are quite similar to the ones they have at Krusty Burger. Oh ho ho ho, no, patented Skinner burgers, old family recipe. For steamed hams? Yes! Yeah, so you call them steamed hams, despite the fact they are obviously grilled. Ye- I- You know th- one thing I shoul- excuse me for one second. Of course. AAH, well that was wonderful, good time was had by all, I'm pooped. *burning* Yes I should be- GOOD LORD WHAT IS HAPPENING IN THERE? Aurora Borealis. Au-Aurora Borealis? At this this time of year, at this time of day, in this part of the country, localized entirely within your kitchen!?! Yes! ...May I see it? ...No. Seymour, the house is on fire!!! No, mother, it's just the northern lights. Well Seymour, you are an odd fellow, but I must say, you steam a good ham. *burning* Help, HELP!!!" 
  }

}

function delicious() {
  if(veryHungry == true) {
    return "Goldilocks is very hungry, so she goes inside."
  } else {
    let inspection = inspects();
    return inspection;
  }
}

function inspects() {
  let insp = random(1, 6);
  if(insp > 5) {
    return ""
  } else {
    return "."
  }
}


//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    