let value = 0;

function rating(n) {
    let element = document.getElementsByClassName("ratingBtn");
   
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "#2e373f";
        element[i].style.color = "hsl(216, 12%, 54%)";
    }

    element[n - 1].style.backgroundColor = "hsl(25, 97%, 53%)";
    element[n - 1].style.color = "hsl(0, 0%, 100%)";
    value = element[n - 1].innerHTML;
    console.log(value);
}

function submit() {
    let mainCard = document.getElementById("mainCard");
    let ratingCard = document.getElementById("ratingCard");
    let selectionTxt = document.getElementById("ratingSpan");

    if (value == 0) {
        alert("Please select a rating");
    } else {
        selectionTxt.innerHTML = value;
        mainCard.classList.add("hidden");
        ratingCard.classList.remove("hidden");
    }

}

function hover(n){
    if(value !== n.innerHTML){
        n.style.backgroundColor = "hsl(217, 12%, 63%)";
        n.style.color = "hsl(0, 0%, 100%)";
        n.style.cursor = "pointer";
    }
}

function noHover(n){
    if(value !== n.innerHTML){
        n.style.backgroundColor = "#2e373f";
        n.style.color = "hsl(216, 12%, 54%)";
    }
} 