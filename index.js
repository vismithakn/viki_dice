
var num1;
var num2;
var name1 = prompt("Enter player 1's name");
var name2 = prompt("Enter player 2's name");


function diceSelect1(){
    num1 = Math.floor((Math.random() * 6) + 1);
    const img1 = document.getElementById("img1");

    if (num1 ===1){
       return img1.setAttribute("src", "images/dice1.png");
    }
    else if(num1 ===2){
        return img1.setAttribute("src", "images/dice2.png");
    }
    else if(num1 ===3){
        return img1.setAttribute("src", "images/dice3.png");
    }
    else if(num1===4){
        return img1.setAttribute("src", "images/dice4.png");
    }
    else if(num1 ===5){
        return img1.setAttribute("src", "images/dice5.png");
    }
    else{
        return img1.setAttribute("src", "images/dice6.png");
    }

}

function diceSelect2(){
    num2 = Math.floor((Math.random() * 6) + 1);
    const img2 = document.getElementById("img2");

    if (num2 ===1){
       return img2.setAttribute("src", "images/dice1.png");
    }
    else if(num2 ===2){
        return img2.setAttribute("src", "images/dice2.png");
    }
    else if(num2 ===3){
        return img2.setAttribute("src", "images/dice3.png");
    }
    else if(num2 ===4){
        return img2.setAttribute("src", "images/dice4.png");    
    }
    else if(num2 ===5){
        return img2.setAttribute("src", "images/dice5.png");
    }
    else{
        return img2.setAttribute("src", "images/dice6.png");
    }

}




