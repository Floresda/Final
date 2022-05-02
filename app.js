function myfunction() {
    alert("Don't forget to hover over the title!");
    alert("Also if any images don't load just refresh the page.")
}
myfunction();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! Hope you're having a great day!";
    }
    document.getElementById("demo").innerHTML = text;
}
