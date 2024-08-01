let mode = localStorage.getItem("mode");

if (mode === null){
    mode = "hell";
}

if (mode === "dunkel"){
    var body = document.body;
    body.style.backgroundColor = "black";
    var schalterDiv = document.getElementById("schalterDiv");
    schalterDiv.style.borderColor = "white";
    var schalter = document.getElementById("schalter");
    schalter.style.backgroundColor = "white";
    schalter.style.marginLeft = "30px";

    
}

function darkmode(){
    if (mode === "hell"){
        mode = "dunkel";
    } else if (mode === "dunkel"){
        mode = "hell";
    }
    
    if (mode === "dunkel"){
        var body = document.body;
        body.style.backgroundColor = "black";
        var schalterDiv = document.getElementById("schalterDiv");
        schalterDiv.style.borderColor = "white";
        var schalter = document.getElementById("schalter");
        schalter.style.backgroundColor = "white";
        schalter.style.marginLeft = "30px";


    } else if (mode === "hell"){
        var body = document.body;
        body.style.backgroundColor = "white";
        var schalterDiv = document.getElementById("schalterDiv");
        schalterDiv.style.borderColor = "black";
        var schalter = document.getElementById("schalter");
        schalter.style.backgroundColor = "black";
        schalter.style.marginLeft = "0px";


    }

    localStorage.setItem("mode", mode)
}