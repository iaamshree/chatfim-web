function sendMessage() {
    var input = document.getElementById("messageInput");
    var message = input.value;

    if (message.trim() === "") {
        return;
    }

    var chatBox = document.getElementById("chatBox");

    var newMessage = document.createElement("p");
    newMessage.textContent = message;

    chatBox.appendChild(newMessage);

    input.value = "";
}