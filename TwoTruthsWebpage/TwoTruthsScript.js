let rightFacts = ["This is a right fact", "This fact is correct", "Correcto", "I've heard that this may be a correct fact", "You didn't hear it from me but this is the right choice"]
let wrongFacts = ["Absolutely false", "So wrong", "Right! Sike.", "Don't trust me", "Wrongo", "Probably wrong", "Hi, I'm wrong", "If wrong is wrong, I'm wrong", "This is incorrect, sir. Or ma'am."]

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
    if(!rightFacts.includes(elmnt.firstElementChild.firstElementChild.innerHTML)){
        //elmnt.style.color = "green";
        elmnt.classList.add("bg-success");
        //alert("You found the lie!");
        setTimeout(refreshFacts, 1000);
    }
    else{
        //elmnt.style.color = "red";
        elmnt.classList.add("bg-danger");
        //alert("That's actually true. Try again!");
    }
}

function refreshFacts() {
    var facts = document.getElementsByClassName("fact");
    var card = document.getElementsByClassName("card");
    let factPlaces = shuffle([0,1,2]);
    var randNum = get_random(factPlaces);
    var usedFact;
    var randFact;

    for (let i = 0; i < 3; i++) {
        card[i].classList.remove("bg-danger") || card[i].classList.remove("bg-success");
    }
    
    for (let i = 0; i < 3; i++) {
        if(i == randNum){
            randFact = get_random(wrongFacts);
            facts[factPlaces[i]].innerHTML = randFact;
        }else{
            randFact = get_random(rightFacts);
            while (randFact == usedFact) {
                randFact = get_random(rightFacts);
            }
            facts[factPlaces[i]].innerHTML = randFact;
            usedFact = randFact;
        }
    }
}