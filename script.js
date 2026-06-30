function welcome() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name.");
    } else {
        alert("Welcome " + name + "!");
    }
}

function career() {
    let interest = document.getElementById("interest").value;
    let result = "";

    if (interest === "Engineering") {
        result = "Suggested Career: Software Engineer";
    } else if (interest === "Medical") {
        result = "Suggested Career: Doctor";
    } else if (interest === "Commerce") {
        result = "Suggested Career: Chartered Accountant";
    } else if (interest === "Arts") {
        result = "Suggested Career: Graphic Designer";
    } else if (interest === "Cyber Security") {
        result = "Suggested Career: Cyber Security Analyst";
    }

    document.getElementById("result").innerHTML = result;
}

