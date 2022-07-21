(function() {
    document.querySelectorAll('.day').forEach(item => {
        item.addEventListener('click', event => {
            console.log(event.target.dataset.date, event.target.innerText, "Weekend: " + event.currentTarget.classList.contains('weekend'),);
        })
    })
    // console.log("basa");
    // document.querySelectorAll('.day').forEach(item => {
    //     console.log(item)
    //     item.addEventListener('click', event => {
    //         openForm(event.target.dataset.date);
    //         console.log("ss")
    //         openForm1(event.target.dataset.date);
    //         alert(event.target.dataset.date);
    //
    //     })
    // });
})();


function openForm(day) {
    document.getElementById("myForm").style.display = "block";
    alert(`DAY ${day}`);
    var paragraph = document.getElementById("1");
    document.getElementById("1").innerHTML = "";
    var text = document.createTextNode("Aceasta persoana o sa fie cazata in aceasta luna in data de: " + day + ".Luna mea personalizata")
    paragraph.appendChild(text);
}


function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm1(day) {
    document.getElementById("myForm1").style.display = "block";
    alert(`DAY ${day}`);
    var paragraph = document.getElementById("2");
    document.getElementById("2").innerHTML = "";
    var text = document.createTextNode("Aceasta persoana o sa fie cazata in aceasta luna in data de: " + day)
    paragraph.appendChild(text);
}

function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
}

function openForm2(day) {
    document.getElementById("myForm2").style.display = "block";
    alert(`DAY ${day}`);
    var paragraph = document.getElementById("3");
    document.getElementById("3").innerHTML = "";
    var text = document.createTextNode("Aceasta persoana o sa fie cazata in aceasta luna in data de: " + day)
    paragraph.appendChild(text);
}

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}

function openForm3(day) {
    document.getElementById("myForm3").style.display = "block";
    alert(`DAY ${day}`);
    var paragraph = document.getElementById("4");
    document.getElementById("4").innerHTML = "";
    var text = document.createTextNode("Aceasta persoana o sa fie cazata in aceasta luna in data de: " + day)
    paragraph.appendChild(text);
}

function closeForm3() {
    document.getElementById("myForm3").style.display = "none";
}
