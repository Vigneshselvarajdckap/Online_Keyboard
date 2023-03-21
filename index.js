// Targeting Html Elements 
const Btns = document.querySelector(".buttons")
// console.log(btns)
const Space = document.querySelector(".spaces")
// console.log(space)
const Shift = document.querySelector(".shift")
// console.log(shift)

// Assign the key values in key code
const value = [
    {
        id: 192,
        btn: "`",
        btns: "`",
        btn1: "~"
    },

    {
        id: 49,
        btn: "1",
        btns: "1",
        btn1: "!"
    },
    {
        id: 50,
        btn: "2",
        btns: "2",
        btn1: "@"
    },
    {
        id: 51,
        btn: "3",
        btns: "3",
        btn1: "#"
    },
    {
        id: 52,
        btn: "4",
        btns: "4",
        btn1: "$"
    },
    {
        id: 53,
        btn: "5",
        btns: "5",
        btn1: "%"
    },
    {
        id: 54,
        btn: "6",
        btns: "6",
        btn1: "^"
    },
    {
        id: 55,
        btn: "7",
        btns: "7",
        btn1: "&"
    },
    {
        id: 56,
        btn: "8",
        btns: "8",
        btn1: "*"
    },
    {
        id: 57,
        btn: "9",
        btns: "9",
        btn1: "("
    },
    {
        id: 48,
        btn: "0",
        btns: "0",
        btn1: ")"
    },
    {
        id: 189,
        btn: "-",
        btns: "-",
        btn1: "_"
    },
    {
        id: 187,
        btn: "=",
        btns: "=",
        btn1: "+"
    },

    {
        id: 8,
        btn: "Backspace",
        btns: "Backspace",
    },
    {
        id: 9,
        btn: "Tab",
        btns:"Tab"
    },



    {
        id: 81,
        btn: "q",
        btns: "Q"
    },
    {
        id: 87,
        btn: "w",
        btns: "W"
    },
    {
        id: 69,
        btn: "e",
        btns: "E"
    },
    {
        id: 82,
        btn: "r",
        btns: "R"
    },
    {
        id: 84,
        btn: "t",
        btns: "T"
    },
    {
        id: 89,
        btn: "y",
        btns: "Y"
    },
    {
        id: 85,
        btn: "u",
        btns: "U"
    },
    {
        id: 73,
        btn: "i",
        btns: "I"
    },
    {
        id: 79,
        btn: "o",
        btns: "O"
    },
    {
        id: 80,
        btn: "p",
        btns: "P"
    },
    {
        id: 219,
        btn: "[",
        btns: "[",
    },
    {
        id: 221,
        btn: "]",
        btns: "]",
    },
    {
        id: 220,
        btn: "|",
        btns: "|",
    },
    {
        id: 20,
        btn: "CapsLock",
        btns: "CapsLock",
    },

    {
        id: 65,
        btn: "a",
        btns: "A"
    },
    {
        id: 83,
        btn: "s",
        btns: "S"
    },
    {
        id: 68,
        btn: "d",
        btns: "D"
    },
    {
        id: 70,
        btn: "f",
        btns: "F"
    },
    {
        id: 71,
        btn: "g",
        btns: "G"
    },
    {
        id: 72,
        btn: "h",
        btns: "H"
    },
    {
        id: 74,
        btn: "j",
        btns: "J"
    },
    {
        id: 75,
        btn: "k",
        btns: "K"
    },
    {
        id: 76,
        btn: "l",
        btns: "L"
    },
    {
        id: 186,
        btn: ";",
        btns: ";"
    },
    {
        id: 222,
        btn: "'",
        btns: "'"
    },

    {
        id: 13,
        btn: "Enter",
        btns: "Enter",

    },
    {
        id: 90,
        btn: "z",
        btns: "Z"
    },

    {
        id: 88,
        btn: "x",
        btns: "X"
    },
    {
        id: 67,
        btn: "c",
        btns: "C"
    },
    {
        id: 86,
        btn: "v",
        btns: "V"
    },
    {
        id: 66,
        btn: "b",
        btns: "B"
    },
    {
        id: 78,
        btn: "n",
        btns: "N"
    },
    {
        id: 77,
        btn: "m",
        btns: "M"
    },
    {
        id: 188,
        btn: ",",
        btns: ","
    },
    {
        id: 96,
        btn: ".",
        btns: "."
    },
    {
        id: 91,
        btn: "/",
        btns: "/"
    }
]
// console.log(value)



let p = document.querySelector(".area")
for (let i = 0; i < value.length; i++) {

    const button = document.createElement("button")
    if (value[i].id == 9) {
        button.classList.add("tab")
    }
    if (value[i].id == 220) {
        button.classList.add("or")

    }
    if (value[i].id == 13) {
        button.classList.add("enter")

    }
    if (value[i].id == 90) {
        button.classList.add("zer")

    }
    button.setAttribute("id", value[i].id)
    button.innerText = value[i].btn;
    Btns.append(button)


}
const AllButtons = document.querySelectorAll("button")

for (let j = 0; j < AllButtons.length; j++) {
    AllButtons[j].addEventListener("click", (e) => {


        if (e.target.innerText == "CapsLock") {
            console.log("kuygedf");
            for (k = 0; k < AllButtons.length; k++) {
                AllButtons[k].innerText = value[k].btns
                e.target.innerText = "CAPSLOCK";
            }
        }
        else if(e.target.innerText == "CAPSLOCK"){
            console.log("gludxq");
            for(k=0;k<AllButtons.length;k++){
                AllButtons[k].innerText = value[k].btn;
                e.target.innerText = "CapsLock";
            }
        }
        else if (e.target.innerText == "") {
            p.value += " "
            display()
        }
        else if (e.target.innerText == "Shift") {
            display()
            return
        }
        else if (e.target.innerText == "Backspace") {
            p.value = p.value.slice(0, -1);
            display()
        }
        else if (e.target.innerText == "BACKSPACE") {
            p.value = p.value.slice(0, -1);
            display()
        }
        else if (e.target.innerText == "Tab") {
            p.value += "    "
            display()
        }
        else if (e.target.innerText == "tab") {
            p.value += "    "
            display()
        }
        else if (e.target.innerText == "Enter") {
            p.value += "\n";
            display()
        }
        else if (e.target.innerText == "ENTER") {
            p.value += "\n";
            display()
        }
        else {
            p.value += e.target.innerText
            display()
        }
        function display() {
            for (let m = 0; m < AllButtons.length; m++) {
                if (e.keyCode == AllButtons[m].id) {
                    AllButtons[m].classList.add("active")
                }
                window.setTimeout(() => {
                    AllButtons[m].classList.remove("active")

                }, 200)
            }
        }
    })
}


window.addEventListener("keydown", (e) => {

    if (e.code == "CapsLock") {
        for (k = 0; k < AllButtons.length; k++) {
            if (AllButtons[k].className == "") {
                AllButtons[k].classList.add("show")
                AllButtons[k].innerText = value[k].btns
            }
            else if (AllButtons[k].classList.contains("show")) {
                AllButtons[k].classList.remove("show")
                AllButtons[k].innerText = value[k].btn
            }
        }
    }
    if (e.key == "Backspace") {
        p.value = p.value.slice(0, -1)
        display()
    }
    else if (e.key == "Enter") {
        p.value += "\n";
        display()
    }
    else if (e.key == "Shift") {
        return;
    }
    else if (e.code == "Tab") {
        p.value += "    ";
    }
    else if (e.key == "CapsLock") {
        return
    }
    else if (e.code == "Space") {
        p.value += " ";
        display()
    }
    else {
        for (let r = 0; r < value.length; r++) {
            if (value[r].id == e.keyCode && AllButtons[r].classList.contains("show")) {
                p.value += value[r].btns
                display()
            }
            else if (e.key == value[r].btn) {
                p.value += value[r].btn
                display()
            }
        }
    }
    function display() {
        for (let m = 0; m < AllButtons.length; m++) {
            if (e.keyCode == AllButtons[m].id) {
                AllButtons[m].classList.add("active")
            }
            window.setTimeout(() => {
                AllButtons[m].classList.remove("active")
            }, 200)
        }
    }
})

Shift.addEventListener("click", (e) => {
    Shift.classList.toggle("open")
    for (let x = 0; x < value.length; x++) {
        if (Shift.classList.contains("open")) {
            if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
                AllButtons[x].innerText = value[x].btn1
            }
            if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
                AllButtons[x].innerText = value[x].btns
            }
        }
        else if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
            AllButtons[x].innerText = value[x].btn
        }
        else if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
            AllButtons[x].innerText = value[x].btn
        }
    }
})


window.addEventListener("keydown", (e) => {
    if (e.shiftKey) {
        Shift.classList.toggle("open")
        for (let v = 0; v < value.length; v++) {
            if (Shift.classList.contains("open")) {
                if (AllButtons[v].id >= 48 && AllButtons[v].id <= 57) {
                    AllButtons[v].innerText = value[v].btn1
                    if (AllButtons[v].id >= 65 && AllButtons[v].id <= 90) {
                        AllButtons[v].innerText = value[v].btns
                    }
                }
                if (AllButtons[v].id >= 65 && AllButtons[v].id <= 90) {
                    AllButtons[v].innerText = value[v].btns
                }
            }
            else if (AllButtons[v].id >= 48 && AllButtons[v].id <= 57) {
                AllButtons[v].innerText = value[v].btn
            }
            else if (AllButtons[v].id >= 65 && AllButtons[v].id <= 90) {
                AllButtons[v].innerText = value[v].btn
            }
            if (AllButtons[v].id >= 48 && AllButtons[v].id <= 57) {
                if (e.key == value[v].btn1) {
                    p.value += value[v].btn1
                }
            }
            if (AllButtons[v].id >= 65 && AllButtons[v].id <= 90) {
                if (e.key == value[v].btns) {
                    p.value += value[v].btns
                }
            }
        }
    }
})