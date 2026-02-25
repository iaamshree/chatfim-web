function sendMessage() {
    var message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please type something!");
        return;
    }

    var output = document.getElementById("output");

    var newMessage = document.createElement("p");
    newMessage.innerText = message;

    output.appendChild(newMessage);

    document.getElementById("message").value = "";
}