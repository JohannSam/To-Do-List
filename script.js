var crossBtn = document.getElementsByClassName("close");

var default_li = document.getElementsByTagName("LI");
for(let i = 0 ; i < default_li.length; i++) {
    var span = document.createElement("span");
    var cross = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(cross);
    default_li[i].appendChild(span);
}

for(let i = 0; i < crossBtn.length; i++) {
    crossBtn[i].onclick = function () {
        let p = this.parentElement;
        p.style.display = "none";
    }
}

function newElement() {
    var inputValue = document.getElementById("myInput").value;
    var li = document.createElement("li");
    if (inputValue === "") {
      alert("You must write something!");
    } else {
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    // 00D7
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross);
    li.appendChild(span); 

    for(let i = 0; i < crossBtn.length; i++) {
        crossBtn[i].onclick = function () {
            let p = this.parentElement;
            p.style.display = "none";
        }
    }
} 

// Listeners 
var ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
    if(event.target.tagName == "LI") {
        event.target.classList.toggle("checked");
    }
},false); 