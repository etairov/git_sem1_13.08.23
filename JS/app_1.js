var nameUser=prompt("Давайте познакомимся! Как вас зовут?", "Евгений");
alert("Рады вас видеть, " + nameUser);

function chat()
{
    var message = document.getElementById("text").value;
    document.getElementById("text").value = "";
    console.log(message);
}

function welcome()
{
    var message = document.getElementById("text").value;
    document.getElementById("text").innerText = "Мы рады приветствовать вас!";
    console.log(message);
}
