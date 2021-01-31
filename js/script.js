var username

function hello() {
    if (username) {
        alert("Hello!");
    } else {
        username = prompt("Hello!! What's your name??");
        if (username)
            alert("Hello " + username + "...nice to meet you.");
    }
}

function smile(){
    document.getElementById("smiley").src = "images/myFace_smile.png";
}