
var flag = "no"
function applyBold() {

    var textArea = document.getElementById("input")
    if (flag == "no") {
        flag = "yes"
        textArea.style.fontWeight = "900"
    }
    else if (flag == "yes") {
        flag = "no"
        textArea.style.fontWeight = "300"
    }
}

function applyUnderline() {
    var textArea = document.getElementById("input")
    if (flag == "no") {
        flag = "yes"
        textArea.style.textDecoration = "underline"
    }
    else if (flag == "yes") {
        flag = "no"
        textArea.style.textDecoration = "none"

    }
}


function applyItalic() {
    var textArea = document.getElementById("input")
    if (flag == "no") {
        flag = "yes"
        textArea.style.fontStyle = "italic"
    }
    else if (flag == "yes") {
        flag = "no"
        textArea.style.fontStyle = "normal"
    }

}

function applyBackColor() {
    var textArea = document.getElementById("input")
    textArea.style.backgroundColor = document.getElementById("backcolor").value
}

function applyColor() {
    var textArea = document.getElementById("input")
    textArea.style.color = document.getElementById("color").value
}

function left() {
    var textArea = document.getElementById("input")
    textArea.style.textAlign = "left"
}

function right() {
    var textArea = document.getElementById("input")
    textArea.style.textAlign = "right"
}




function center() {
    var textArea = document.getElementById("input")
    textArea.style.textAlign = "center"
}

function justify() {
    var textArea = document.getElementById("input")
    textArea.style.textAlign = "justify"
}



function changeFont() {
    var textArea = document.getElementById("input")
    var select = document.getElementById("font")
    textArea.style.fontFamily = select.value
}

function changeSize() {
    var textArea = document.getElementById("input")
    var size = document.getElementById("size")
    textArea.style.fontSize = size.value

}