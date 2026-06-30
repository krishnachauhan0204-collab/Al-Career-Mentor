function welcome() {
    let name = document.getElementById("name").value;
    document.getElementById("result").innerHTML =
    "Welcome " + name + "!";
}

function career() {
    let interest = document.getElementById("interest").value;

    if (interest == "Engineering") {
        document.getElementById("result").innerHTML = "Best Career: Software Engineer";
    }
    else if (interest == "Medical") {
        document.getElementById("result").innerHTML = "Best Career: Doctor";
    }
    else if (interest == "Commerce") {
        document.getElementById("result").innerHTML = "Best Career: Chartered Accountant";
    }
    else if (interest == "Arts") {
        document.getElementById("result").innerHTML = "Best Career: Graphic Designer";
    }
    else if (interest == "Cyber Security") {
        document.getElementById("result").innerHTML = "Best Career: Cyber Security Analyst";
    }
}
