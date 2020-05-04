let rightFacts = ["This is a right fact", "This fact is correct", "Correcto", "I've heard that this may be a correct fact", "You didn't hear it from me but this is the right choice"]
let wrongFacts = ["Absolutely false", "So wrong", "Right! Sike.", "Don't trust me", "Wrongo", "Probably wrong", "Hi, I'm wrong", "If wrong is wrong, I'm wrong", "This is incorrect, sir. Or ma'am."]
let allFacts = rightFacts.concat(wrongFacts);
let factsClicked = 0;

get_random = function (list) {
    return list[Math.floor((Math.random()*list.length))];
} 

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function rightWrong(elmnt) {
    const succesClass = "bg-success";
    const dangerClass = "bg-danger";
    const card = elmnt.parentElement.previousElementSibling.parentElement;
    const factText = elmnt.parentElement.previousElementSibling.firstElementChild.innerHTML;

    if(rightFacts.includes(factText) && elmnt.innerHTML === "True"){
        //elmnt.style.color = "green";
        if(!(card.classList.contains(succesClass) || card.classList.contains(dangerClass))){
            card.classList.add(succesClass);
            factsClicked++;
        }
        //alert("You found the lie!");
    }
    else if(elmnt.innerHTML === "False" && wrongFacts.includes(factText)){
        if(!(card.classList.contains(succesClass) || card.classList.contains(dangerClass))){
            card.classList.add(succesClass);
            factsClicked++;
        }
    }
    else{
        //elmnt.style.color = "red";
        if(!(card.classList.contains(succesClass) || card.classList.contains(dangerClass))){
            card.classList.add(dangerClass);
            factsClicked++;
        }
        //alert("That's actually true. Try again!");
    }

    if(factsClicked === 6){
        setTimeout(refreshFacts, 1000);
        factsClicked = 0;
    }
    
    //console.log(elmnt.parentElement.previousElementSibling.firstElementChild.innerHTML);
}

function refreshFacts() {
    let facts = document.getElementsByClassName("fact");
    let card = document.getElementsByClassName("card");
    //let factPlaces = shuffle([0,1,2]);
    //let randNum = get_random(factPlaces);
    let usedFact;
    let randFact;

    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove("bg-danger") || card[i].classList.remove("bg-success");
    }
    
    for (let i = 0; i < facts.length; i++) {
        randFact = get_random(allFacts);
        while (randFact == usedFact) {
            randFact = get_random(rightFacts);
        }
        facts[i].innerHTML = randFact;
        usedFact = randFact;
    }
}