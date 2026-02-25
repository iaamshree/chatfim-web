function sendMessage() {
    var message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please type something!");
        return;
    }

    document.getElementById("output").innerText = message;

    document.getElementById("message").value = "";
}
