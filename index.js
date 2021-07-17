// first random number
const randomNumber1 = Math.floor(Math.random()*6) + 1;
//first image 
const randomImageSource1 = "images/dice" + randomNumber1 + ".png";
// set src attribute of image 1
document.querySelector(".img1").setAttribute("src",randomImageSource1);

// second random number
const randomNumber2 = Math.floor(Math.random()*6) + 1;
// second image
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//set src attribute of image 2
document.querySelector(".img2").setAttribute("src",randomImageSource2);

// if player 1 wins
if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}

// if player 2 wins
else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}

// if Draw

else if ( randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").innerHTML = "It's a Draw";
}

// error case
else {
    console.log( "There is something wrong with the code." );
}