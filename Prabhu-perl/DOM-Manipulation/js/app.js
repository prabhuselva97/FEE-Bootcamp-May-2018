
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName("class1"));

}

function byTag() {
    console.log(document.getElementsByTagName("p"));

}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor = "blue";

}

function increaseFont() {
    document.getElementById("block2").style.fontSize = "x-large";
}

function changeFontColor() {
    document.getElementById("block3").style.color = "green";

}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hideContent() {
    document.getElementById("block4").style.display = "none";
}

function changeColor() {
    document.getElementById("box2").style.color = "green";
}


function addAdjacent() {
    var para = document.createElement("p");
    var node = document.createTextNode("I got generated on the fly...");
    para.appendChild(node);
    var element = document.getElementById("para2");
    element.appendChild(para);
}

function removePara() {
    var element = document.getElementById("para4");
    element.remove();


}

function animatePara() {
    var elem = document.getElementById("box5");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
function toUpperCase(){
    var value=document.getElementById("inputBox1").value;
    document.getElementById("inputBox2").value= value.toUpperCase();
}
function toCamelCase(){
    console.log("inside camelcase");
    
    document.getElementById("inputBox3").innerHtml.toCamelCase();
}
function changeBg(){
    document.getElementById("inputBox4").style.backgroundColor="green";
}

